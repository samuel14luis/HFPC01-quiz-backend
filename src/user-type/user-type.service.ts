import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { UserType } from './entities/user-type.entity';

@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private readonly repository: Repository<UserType>,
  ) {}

  async create(dto: CreateUserTypeDto): Promise<UserType> {
    const o: UserType = await this.repository.create(dto);
    return this.repository.save(o);
  }

  async findAll(): Promise<UserType[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<UserType> {
    const o = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return o;
  }

  async existByName(name: string): Promise<Boolean> {
    const o = await this.repository.findOneBy({ name });
    return o !== null;
  }

  async update(id: number, dto: UpdateUserTypeDto) {
    const { name } = dto;
    const o: UserType = await this.repository.preload({
      id,
      name,
    });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return this.repository.save(o);
  }

  async remove(id: number): Promise<void> {
    const o: UserType = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    this.repository.remove(o);
  }
}
