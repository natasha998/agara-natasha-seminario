import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-disc-comment-user',
  templateUrl: './disc-comment-user.component.html',
  styleUrls: ['./disc-comment-user.component.scss']
})
export class DiscCommentUserComponent implements OnInit {

  textArea : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit(): void {
  }

  inserText(text: string){
    this.textArea.emit(text);
  }


}
