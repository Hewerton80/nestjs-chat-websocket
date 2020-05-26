import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer, OnGatewayInit } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server
  private msgs: string[]

  @SubscribeMessage('connectToMsgs')
  handleMessage(client: Socket, payload: any) {
    console.log('handleMessage',' client id: ',client.id)
  }

  async handleConnection(client: Socket, ...args: any[]){
    console.log('handleConnection usuário conectado',' client id: ',client.id)
  }

  async handleDisconnect(client: Socket, ...args: any[]){
    console.log('handleDisconnect usuário desconectado',' client id: ',client.id)
  }
}
