import { PickType } from '@nestjs/swagger';
import { CreateTestDto } from './create-test.dto';

export class UpdateTestDto extends PickType(CreateTestDto, [
    'name', 'description', 'status', 'fk_idTestType', 'fk_idUserCreator'
  ] as const) {}