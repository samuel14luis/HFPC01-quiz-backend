import { Injectable, Logger } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserTypeBootstrap {

    private readonly logger: Logger;

    constructor( 
        private readonly service: UserTypeService,
        private readonly config: ConfigService
        ) {
        this.logger = new Logger(UserTypeBootstrap.name)
    }

    async loadData(): Promise<void> {

        const userTypes: string[] = this.config.get('QUIZ_SYSTEM_USER_TYPES').split(',');
        
        await this.create('Admin');

        await userTypes.forEach( async (userType) => {
            if(userType == null || userType == '') return null;
            else await this.create(userType);
        })
        
    }

    private async create(name: string) {
        const exist: Boolean = await this.service.existByName(name);

        if (exist) {
            this.logger.log(`[UserType] The user type ${name} already exists.`);
        } else {
            const dto: CreateUserTypeDto = { name };
            await this.service.create(dto);

            this.logger.log(`UserType] The user type ${name} was created succesfully.`);
        }
    }

}