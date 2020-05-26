import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { ChatGateway } from 'src/chat/chat.gateway';

@Module({
  providers: [MessageService,ChatGateway],
  controllers: [MessageController]
})
export class MessageModule {}
