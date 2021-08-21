/* eslint-disable prettier/prettier */
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const Config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'test',
    port: 5432,
    username: 'postgres',
    password: 'test',
    synchronize: false,
    logging: true,
    entities: ['dist/src/**/*.entity.js'],
    migrations: [
        'dist/src/db/migrations/*.js'
    ],
    cli: {
        migrationsDir: 'src/db/migrations'
    }
};

export default Config;
