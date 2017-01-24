import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input class="new-todo"
           [hidden]="flag"
           [placeholder]="text"
           autofocus>
  `,
  styles: []
})
export class TodoInputComponent implements OnInit {

  private text:string;
  type = 'text';
  flag=false;

  constructor() {
    this.text='What needs to be done?';
    // setTimeout(()=> this.type = 'date', 5000 );
  }

  ngOnInit() {
  }

}
