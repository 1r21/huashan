import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default () => {
  const { HOST, PORT = 5432, DB_NAME, USER_NAME, PASSWORD } = process.env;
  return {
    database: {
      type: 'mysql',
      host: HOST,
      port: PORT,
      username: USER_NAME,
      password: PASSWORD,
      database: DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    } as TypeOrmModuleOptions,
  };
};
