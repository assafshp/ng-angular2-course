import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  template: `
    <footer class="footer">
      <ng-content></ng-content>
    </footer>
  `,
  styles: []
})
export class TodoFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
