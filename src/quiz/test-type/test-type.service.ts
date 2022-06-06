import { Injectable } from '@nestjs/common';
import { CreateTestTypeDto } from './dto/create-test-type.dto';
import { UpdateTestTypeDto } from './dto/update-test-type.dto';

@Injectable()
export class TestTypeService {
  create(createTestTypeDto: CreateTestTypeDto) {
    return 'This action adds a new testType';
  }

  findAll() {
    return `This action returns all testType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testType`;
  }

  update(id: number, updateTestTypeDto: UpdateTestTypeDto) {
    return `This action updates a #${id} testType`;
  }

  remove(id: number) {
    return `This action removes a #${id} testType`;
  }
}
