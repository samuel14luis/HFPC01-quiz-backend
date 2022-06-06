import { Injectable } from '@nestjs/common';
import { CreateBootstrapDto } from './dto/create-bootstrap.dto';
import { UpdateBootstrapDto } from './dto/update-bootstrap.dto';

@Injectable()
export class BootstrapService {
  create(createBootstrapDto: CreateBootstrapDto) {
    return 'This action adds a new bootstrap';
  }

  findAll() {
    return `This action returns all bootstrap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bootstrap`;
  }

  update(id: number, updateBootstrapDto: UpdateBootstrapDto) {
    return `This action updates a #${id} bootstrap`;
  }

  remove(id: number) {
    return `This action removes a #${id} bootstrap`;
  }
}
