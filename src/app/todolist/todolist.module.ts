import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app.component';
import { TodoHeaderComponent } from './todo-header.component';
import { TodoMainComponent } from './todo-main.component';
import { TodoFooterComponent } from './todo-footer.component';
import { TodoTitleComponent } from './todo-title.component';
import { TodoInputComponent } from './todo-input.component';
import { TodoToggleComponent } from './todo-toggle.component';
import { TodoItemsComponent } from './todo-items.component';
import { TodoItemComponent } from './todo-item.component';
import { TodoCounterComponent } from './todo-counter.component';
import { TodoCleanBtnComponent } from './todo-clean-btn.component';
// import { Todolist } from "./todolist.service";
import {UtilsModule} from "../utils/utils.module";

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  // providers:[
  //   Todolist
  // ],
  declarations: [
    TodoAppComponent,
    TodoHeaderComponent,
    TodoMainComponent,
    TodoFooterComponent,
    TodoTitleComponent,
    TodoInputComponent,
    TodoToggleComponent,
    TodoItemsComponent,
    TodoItemComponent,
    TodoCounterComponent,
    TodoCleanBtnComponent
  ],
  exports: [
    TodoAppComponent
  ]
})
export class TodolistModule {

  constructor() {
    console.log('TodolistModule instance');
  }

}
