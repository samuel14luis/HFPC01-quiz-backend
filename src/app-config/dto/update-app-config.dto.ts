import { OmitType } from '@nestjs/swagger';
import { CreateAppConfigDto } from './create-app-config.dto';

export class UpdateAppConfigDto extends OmitType(CreateAppConfigDto, ['key'] as const) {} {

}
