import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Mirzhalol1995',
  database: 'profileManagement',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
