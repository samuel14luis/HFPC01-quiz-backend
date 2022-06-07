import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionTypeDto } from './dto/create-question-type.dto';
import { UpdateQuestionTypeDto } from './dto/update-question-type.dto';
import { QuestionType } from './entities/question-type.entity';

@Injectable()
export class QuestionTypeService {
  constructor(
    @InjectRepository(QuestionType)
    private readonly repository: Repository<QuestionType>,
  ) {}

  async create(dto: CreateQuestionTypeDto): Promise<QuestionType> {
    const o: QuestionType = await this.repository.create(dto);
    return this.repository.save(o);
  }

  async findAll(): Promise<QuestionType[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<QuestionType> {
    const o = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return o;
  }

  async existByName(name: string): Promise<Boolean> {
    const o = await this.repository.findOneBy({ name });
    return o !== null;
  }

  async update(id: number, dto: UpdateQuestionTypeDto) {
    const { name } = dto;
    const o: QuestionType = await this.repository.preload({
      id,
      name,
    });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    return this.repository.save(o);
  }

  async remove(id: number): Promise<void> {
    const o: QuestionType = await this.repository.findOneBy({ id });

    if (!o) throw new NotFoundException(`Cannot find an item with id ${id}.`);

    this.repository.remove(o);
  }
}
