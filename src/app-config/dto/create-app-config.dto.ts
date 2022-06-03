import { ApiProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";

export class CreateAppConfigDto {
    @ApiProperty({
        type: String,
        description: 'App Config Key',
        default: 'QUIZ_KEY'
    })
    @MaxLength(100)
    key: string;

    @ApiProperty({
        type: String,
        description: 'App Config Value',
        default: 'CONFIG_VALUE'
    })
    @MaxLength(100)
    value: string;

    @ApiProperty({
        type: String,
        description: 'App Config Category',
        default: 'EXAMPLE CATEGORY'
    })
    @MaxLength(100)
    category: string;
}
