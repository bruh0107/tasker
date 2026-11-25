import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module.js';
import { TaskModule } from './task/task.module.js';
import { TagModule } from './tag/tag.module.js';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    TaskModule,
    TagModule,
  ],
})
export class AppModule {}
