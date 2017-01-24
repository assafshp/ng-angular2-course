import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-toggle',
  template: `
    <input class="toggle-all"
           #input
           (change)="toggle.emit(input.checked)"
           type="checkbox">
  `,
  styles: []
})
export class TodoToggleComponent {

  @Output() toggle = new EventEmitter<boolean>();

}


//<!--(change)="toggle.emit($event.target.checked)"-->
