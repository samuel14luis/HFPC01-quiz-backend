import { PartialType } from '@nestjs/swagger';
import { CreateBootstrapDto } from './create-bootstrap.dto';

export class UpdateBootstrapDto extends PartialType(CreateBootstrapDto) {}
