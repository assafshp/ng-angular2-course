import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-app',
  template: `
    <section class="todoapp">
      <app-todo-header>
        <app-todo-title></app-todo-title>
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

  constructor() { }

  ngOnInit() {
  }

}
