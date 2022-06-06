import { Injectable, Logger } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthBootstrap {

    private readonly logger: Logger;

    constructor( 
        private readonly service: AuthService,
        private readonly config: ConfigService
        ) {
        this.logger = new Logger(AuthBootstrap.name)
    }

    async loadData(): Promise<void> {

        const username = this.config.get('QUIZ_SYSTEM_ADMIN_USERNAME');
        const exist: Boolean = await this.service.existByUsername(username);

        if (exist) {
            this.logger.log('[Admin Account] The admin user already exists.');
        } else {
            this.logger.log('[Admin Account] The admin does not exist. Creating...');

            const dto: RegisterAuthDto = new RegisterAuthDto();
            
            dto.name = this.config.get('QUIZ_SYSTEM_ADMIN_NAME');
            dto.shortname = this.config.get('QUIZ_SYSTEM_ADMIN_SHORTNAME');
            dto.email = this.config.get('QUIZ_SYSTEM_ADMIN_EMAIL');
            dto.username = username;
            dto.password = this.config.get('QUIZ_SYSTEM_ADMIN_PASSWORD');
            dto.passwordConfirm = this.config.get('QUIZ_SYSTEM_ADMIN_PASSWORD');
            dto.idUserParent = 1;
            dto.idUserType = 1;
            
            await this.service.register(dto);

            this.logger.log('[Admin Account] The admin was created succesfully.');
        }
    }

}