import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-clean-btn',
  template: `
    <button class="clear-completed">Clear completed</button>
  `,
  styles: []
})
export class TodoCleanBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
