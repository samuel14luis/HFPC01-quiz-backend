import { Injectable, Logger } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';

@Injectable()
export class UserTypeBootstrap {

    private readonly logger: Logger;

    constructor( 
        private readonly service: UserTypeService
        ) {
        this.logger = new Logger(UserTypeBootstrap.name)
    }

    async loadData(): Promise<void> {

        await this.create('Admin');
        await this.create('Teacher');
        await this.create('Student');
        
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