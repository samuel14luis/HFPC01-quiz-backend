import { PickType } from '@nestjs/swagger';
import { CreateQuestionTypeDto } from './create-question-type.dto';

export class UpdateQuestionTypeDto extends PickType(CreateQuestionTypeDto, [
    'name',
  ] as const) {}