import { Component, OnInit } from '@angular/core';
import {Todolist} from "./todolist.service";

@Component({
  selector: 'todo-app',
  template: `
    <section class="todoapp">
      <app-todo-header>
        <app-todo-title title="Assaf"></app-todo-title>
        <app-todo-input></app-todo-input>
      </app-todo-header>
      
      <app-todo-main>
        <app-todo-toggle></app-todo-toggle>
        <app-todo-items></app-todo-items>
      </app-todo-main>
      
      <app-todo-footer>
        <app-todo-counter></app-todo-counter>
        <app-todo-clean-btn></app-todo-clean-btn>
      </app-todo-footer>
    </section>
  `,
  styles: []
})
export class TodoAppComponent implements OnInit {

  constructor(list: Todolist) {

    console.log('list items=' + list.items);


  }

  ngOnInit() {
  }

}
