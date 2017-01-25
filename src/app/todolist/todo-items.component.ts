import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Item} from "./todolist.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush, //don't check inside, shallow, only check if new reference, relevant for input also
  selector: 'app-todo-items',
  template: `

    <ul class="todo-list">
      <app-todo-item *ngFor="let item of items" 
                     [item]="item">
      </app-todo-item>
    </ul>
  `,
  styles: []
})
export class TodoItemsComponent {

  @Input() items: Item[];



}
