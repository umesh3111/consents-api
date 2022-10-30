import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConsentsModule } from './consents/consents.module';

@Module({
  imports: [InMemoryDBModule.forRoot({}), UsersModule, ConsentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
