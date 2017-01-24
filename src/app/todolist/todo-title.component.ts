import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-title',
  template: `
    <h1>todos</h1>
  `,
  // styles: [
  //   `h1 {
  //     position: absolute;
  //     top: -155px;
  //     width: 100%;
  //     font-size: 100px;
  //     font-weight: 100;
  //     text-align: center;
  //     color: rgba(175, 47, 47, 0.15);
  //     -webkit-text-rendering: optimizeLegibility;
  //     -moz-text-rendering: optimizeLegibility;
  //     text-rendering: optimizeLegibility;
  //     }`
  //
  // ]
})
export class TodoTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
