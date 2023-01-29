import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:4200',
  },
})
export class ChatGateway {
  @WebSocketServer()
  private server: Server;

  @SubscribeMessage('message')
  handleEvent(@MessageBody() data: string) {
    this.server.emit('message', {
      msg: data,
    });
  }
}
