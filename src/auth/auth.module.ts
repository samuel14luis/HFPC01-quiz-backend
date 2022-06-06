import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthBootstrap } from './auth.bootstrap';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.QUIZ_JWT_SECRET || "NTT$QUIZ&SECRET&TOKEN",
      signOptions: {
        expiresIn: 3600*23,
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, AuthBootstrap],
  exports: [AuthBootstrap]
})

export class AuthModule {}
