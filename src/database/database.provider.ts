import { DynamicModule } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Environment } from "src/common/enum/environment.enum";
import { DataSourceOptions } from "typeorm";

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
        const isDevelopmentEnv: boolean = config.get('NODE_ENV') !== Environment.Prod;

        const dbConfig = {
            type: 'mysql',
            host: config.get('DB_HOST'),
            port: config.get('DB_PORT'),
            username: config.get('DB_USER'),
            password: config.get('DB_PASSWORD'),
            database: config.get('DB_NAME'),
            autoLoadEntities: true,
            synchronize: isDevelopmentEnv,
            logging: config.get('DB_LOGGING'),
            ssl: {
                ca: config.get('DB_SSL_CERT'),
                rejectUnauthorized: false
            }
        } as DataSourceOptions;

        return dbConfig;
    }
})