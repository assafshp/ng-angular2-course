import {Component, Input} from '@angular/core';
import {Item} from "./todolist.service";

@Component({
  selector: 'app-todo-item',
  template: `
    <li>
        <div class="view">
          <input class="toggle"
                 [checked]="item.done"
                 type="checkbox">

          <!--<label>{{item.title | uppercase}} {{ item.created | date: 'short'}}</label>-->
          <label>{{ item.title }} {{ item.created | date: 'short'}}</label>


          <button class="destroy"></button>

        </div>

        <input class="edit">

      </li>
  `,
  styles: []
})
export class TodoItemComponent  {

  @Input() item:Item;






}
