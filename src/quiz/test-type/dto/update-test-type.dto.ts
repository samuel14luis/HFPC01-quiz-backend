import { PickType } from '@nestjs/swagger';
import { CreateTestTypeDto } from './create-test-type.dto';

export class UpdateTestTypeDto extends PickType(CreateTestTypeDto, [
    'name',
  ] as const) {}