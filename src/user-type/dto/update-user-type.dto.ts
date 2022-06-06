import { PickType } from '@nestjs/swagger';
import { CreateUserTypeDto } from './create-user-type.dto';

export class UpdateUserTypeDto extends PickType(CreateUserTypeDto, [
    'name',
  ] as const) {}
