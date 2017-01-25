import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from "./todolist.service";

@Component({
  selector: 'app-todo-item',
  template: `
    <li>
        <div class="view">
          <input class="toggle"
                 [checked]="item.done"
                 (click)="markDone()"
                 type="checkbox">

          <!--<label>{{item.title | uppercase}} {{ item.created | date: 'short'}}</label>-->
          <label appMarker >{{ item.title | upper}} {{ item.created | date: 'short'}}</label>

          <button class="destroy" (click)="destroyItem.emit()"></button>

        </div>

        <input class="edit">

      </li>
  `,
  styles: []
})
export class TodoItemComponent  {

  @Input() item:Item;
  @Output() destroyItem = new EventEmitter<void>();

  private markDone(){
    console.log('clicked');
    this.item.done = !this.item.done;
  }





}
