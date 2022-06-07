import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly repository: Repository<Test>,
  ) {}

  async create(dto: CreateTestDto): Promise<Test> {
    const o: Test = await this.repository.create(dto);
    o.creationDate = new Date();
    o.updateDate = new Date();

    return this.repository.save(o);
  }

  async findAll(): Promise<Test[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Test> {
    const o = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return o;
  }

  async existByName(name: string): Promise<Boolean> {
    const o = await this.repository.findOneBy({ name });
    return o !== null;
  }

  async update(id: number, dto: UpdateTestDto) {
    const { name, description, status, fk_idTestType, fk_idUserCreator } = dto;
    const o: Test = await this.repository.preload({
      id,
      name,
      description,
      status,
      fk_idTestType,
      fk_idUserCreator
    });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return this.repository.save(o);
  }

  async remove(id: number): Promise<void> {
    const o: Test = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    this.repository.remove(o);
  }
}