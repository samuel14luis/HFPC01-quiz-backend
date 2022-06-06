import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsPositive, Matches, MaxLength, Min, MinLength } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends PickType(LoginAuthDto, ['username','password'] as const) {
    @ApiProperty({
        type: String,
        description: 'Name of the user.',
        default: 'Pedro Perez Sanchez',
    })
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(120)
    name: string;

    @ApiProperty({
        type: String,
        description: 'Shortname of the user.',
        default: 'Pedro P.',
    })
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(40)
    shortname: string;

    @ApiProperty({
        type: String,
        description: 'Email of the user.',
        default: 'example@domain.com',
    })
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(80)
    @IsEmail()
    email: string;

    @ApiProperty({
        type: String,
        description: 'username of the user.',
        default: 'mycool5',
    })
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(20)
    username: string;

    @ApiProperty({
        type: String,
        description: 'password of the user.',
        default: 'my_weak_password',
    })
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(50)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'Password too weak'})
    password: string;

    @ApiProperty({
        type: String,
        description: 'confirm password of the user.',
        default: 'my_weak_password',
    })
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(50)
    passwordConfirm: string;

    @ApiProperty({
        type: String,
        description: "userId of the user's parent.",
        default: 1,
    })
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    idUserParent: number;

    @ApiProperty({
        type: String,
        description: "id of the user's userType.",
        default: 1,
    })
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    idUserType: number;
}
