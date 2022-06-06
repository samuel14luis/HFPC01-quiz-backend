import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from './entities/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user.' })
  @ApiOkResponse({ description: 'The item was created successfully.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  async register(@Body() o: RegisterAuthDto): Promise<User> {
    return await this.service.register(o);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login to an account.' })
  @ApiOkResponse({ description: 'The credentials was returned successfully.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  async create(@Body() o: LoginAuthDto): Promise<User> {
    return await this.service.login(o);
  }

  @Get()
  @ApiOperation({ summary: 'List all items' })
  @ApiOkResponse({ description: 'The items were listed successfully.' })
  async findAll(): Promise<User[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List one item by id' })
  @ApiOkResponse({ description: 'The item was found successfully.' })
  @ApiNotFoundResponse({ description: 'The item was not found.' })
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.service.findOne(+id);
  }
}