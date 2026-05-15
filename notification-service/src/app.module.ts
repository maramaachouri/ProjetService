import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationModule } from './notification/notification.module';

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
    NotificationModule,
  ],
})
export class AppModule {}