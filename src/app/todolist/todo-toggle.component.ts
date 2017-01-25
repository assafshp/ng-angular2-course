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


//optional instead of using the id #input of the element
//<!--(change)="toggle.emit($event.target.checked)"-->
