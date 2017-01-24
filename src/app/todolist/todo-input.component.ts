import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input class="new-todo"
           [hidden]="flag"
           #input
           [placeholder]="text"
           (keydown.enter)="add.emit(input.value); input.value='';"
           autofocus>
  `,
  styles: []
})
export class TodoInputComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  // @Output() add: EventEmitter<string>;
  private text:string;
  // type = 'text';
  flag=false;



  constructor() {
    this.text='What needs to be done?';
    // setTimeout(()=> this.type = 'date', 5000 );
    // this.add = new EventEmitter<string>();
  }

  ngOnInit() {
  }

}
