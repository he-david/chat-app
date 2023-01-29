import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  messages: any[] = [];
  message = '';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessage().subscribe((message: any) => {
      this.messages.push(message.msg);
      console.log(this.messages);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
}
