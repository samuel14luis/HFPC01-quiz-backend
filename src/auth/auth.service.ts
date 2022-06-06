import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToClass } from 'class-transformer';
import { hash, compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/payload.interface';
import { UserType } from 'src/user-type/entities/user-type.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly jwt: JwtService
  ) {}

  async register(dto: RegisterAuthDto): Promise<User> {
    if (dto.password !== dto.passwordConfirm) throw new NotFoundException(`Passwords do not match.`);
    
    let o: User = plainToClass(User, instanceToPlain(dto));
    o.creationDate = new Date();
    o.updateDate = new Date();

    o.password = await hash(dto.password, 10);
    
    o = await this.repository.create(o);
    o.userType = new UserType()
    o.userType.id = dto.idUserType
    o.user = new User()
    o.user.id = dto.idUserParent

    return this.repository.save(o);
  }

  async login(dto: LoginAuthDto): Promise<JwtPayload> {
    const { username, password } = dto;

    const findUser = await this.repository.findOneBy({ username });

    if (!findUser) throw new NotFoundException(`Cannot find a user with username ${username}.`);

    const checkPassword: Boolean = await compare(password, findUser.password);

    if (!checkPassword) throw new ForbiddenException(`The password is incorrect.`);

    const payload = {
      name: findUser.name,
      shortname: findUser.shortname,
      username: findUser.username,
      email: findUser.email
    }
    
    const token = await this.jwt.sign(payload);

    const data = {
      user: findUser,
      token
    }

    return data;
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<User> {
    const o = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return o;
  }

  async existByUsername(username: string): Promise<Boolean> {
    const o = await this.repository.findOneBy({ username });
    return o !== null;
  }
}