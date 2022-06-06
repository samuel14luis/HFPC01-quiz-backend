import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToClass } from 'class-transformer';
import { hash, compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async register(dto: RegisterAuthDto): Promise<User> {
    if (dto.password !== dto.passwordConfirm) throw new NotFoundException(`Passwords do not match.`);
    
    let o: User = plainToClass(User, instanceToPlain(dto));
    o.creationDate = new Date();
    o.updateDate = new Date();

    o.password = await hash(dto.password, 10);

    o = await this.repository.create(o);
    return this.repository.save(o);
  }

  async login(dto: LoginAuthDto): Promise<User> {
    const { username, password } = dto;

    const findUser = await this.repository.findOneBy({ username });

    if (!findUser) throw new NotFoundException(`Cannot find a user with username ${username}.`);

    const checkPassword: Boolean = await compare(password, findUser.password);

    if (!checkPassword) throw new ForbiddenException(`The password is incorrect.`);

    return findUser;
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<User> {
    const o = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return o;
  }
}