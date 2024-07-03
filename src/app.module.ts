import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [PrismaModule, UsersModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
