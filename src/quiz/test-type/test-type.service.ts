import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTestTypeDto } from './dto/create-test-type.dto';
import { UpdateTestTypeDto } from './dto/update-test-type.dto';
import { TestType } from './entities/test-type.entity';

@Injectable()
export class TestTypeService {
  constructor(
    @InjectRepository(TestType)
    private readonly repository: Repository<TestType>,
  ) {}

  async create(dto: CreateTestTypeDto): Promise<TestType> {
    const o: TestType = await this.repository.create(dto);
    return this.repository.save(o);
  }

  async findAll(): Promise<TestType[]> {
    const o: TestType[] = await this.repository.find({ relations: ['fk_idUserCreator'] });

    return await o.map( type => {
      let u: User = new User();
      u.id = type.fk_idUserCreator.id;
      
      return {
        id: type.id,
        name: type.name,
        fk_idUserCreator: u
      }
    })

  }

  async findOne(id: number): Promise<TestType> {
    const o = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return o;
  }

  async existByName(name: string): Promise<Boolean> {
    const o = await this.repository.findOneBy({ name });
    return o !== null;
  }

  async update(id: number, dto: UpdateTestTypeDto) {
    const { name } = dto;
    const o: TestType = await this.repository.preload({
      id,
      name,
    });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return this.repository.save(o);
  }

  async remove(id: number): Promise<void> {
    const o: TestType = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    this.repository.remove(o);
  }
}
