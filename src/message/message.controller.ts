import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private messageService: MessageService ){}

    @Get('/')
    async index(): Promise<string[]>{
        return this.messageService.index();
    }

    @Post('/')
    async store(@Body('msg') msg: string): Promise<void>{
        return this.messageService.store(msg);
    }
}
