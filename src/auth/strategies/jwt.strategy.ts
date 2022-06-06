import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './../interfaces/payload.interface';
import { User } from './../entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.QUIZ_JWT_SECRET || "NTT$QUIZ&SECRET&TOKEN",
            passReqToCallback: true
        });
    }

    async validate(payload: any): Promise<any> {
        //TODO: validate payload
        //const { username } = payload.user;
        //const user = await this.userDao.findByUsername(username);

        //if (!user) throw new UnauthorizedException();

       return payload;
    }

}