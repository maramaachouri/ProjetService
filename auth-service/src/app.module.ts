import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'maram123+*',
      database: 'smart_traffic',
      autoLoadEntities: true,
      synchronize: true,
    }),
     JwtModule.register({
    secret: 'SECRET_KEY',
    signOptions: {
      expiresIn: '1d',
    },
  }),
    AuthModule,
  ],
})
export class AppModule {}