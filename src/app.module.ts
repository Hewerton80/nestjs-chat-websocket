import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';


@Module({
  imports: [ChatModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
