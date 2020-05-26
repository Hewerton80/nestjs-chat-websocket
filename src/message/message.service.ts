import { Injectable } from '@nestjs/common';
import { ChatGateway } from 'src/chat/chat.gateway';

@Injectable()
export class MessageService {
    constructor(private chatGateway: ChatGateway){}
    private msgs: string[] = [];

    async index(): Promise<string[]>{
        //this.chatGateway.server.emit('msgsToClient', this.msgs);
        return this.msgs;
    }

    async store(msg: string): Promise<void>{
        this.msgs = [...this.msgs,msg];
        //console.log(this.server)
        console.log('msg: ',msg)
        this.chatGateway.server.sockets;
        this.chatGateway.server.emit('msgToClient', msg);
    }
}
