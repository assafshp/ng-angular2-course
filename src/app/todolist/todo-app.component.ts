import { Component, OnInit } from '@angular/core';
import {Todolist} from "./todolist.service";

@Component({
  selector: 'todo-app',
  template: `
    <section class="todoapp">
      <app-todo-header>
        <app-todo-title [title]="appTitle"></app-todo-title>
        <app-todo-input (add)="list.addItem($event)"></app-todo-input>
      </app-todo-header>
      
      <app-todo-main>
        <app-todo-toggle (toggle)="list.toggle($event)"></app-todo-toggle>
        <app-todo-items [items]="list.items"></app-todo-items>
      </app-todo-main>
      
      <app-todo-footer>
        <!--<app-todo-counter [amount]="countUnDone()"></app-todo-counter>-->
        <app-todo-counter [amount]="list.items | countBy:'done':false"></app-todo-counter>
        <app-todo-clean-btn label="clear now!" 
                            (clear)="list.removeDone()"></app-todo-clean-btn>
      </app-todo-footer>
    </section>
  `,
  styles: []
})

//<app-todo-clean-btn (click)='list.removeDone()'></app-todo-clean-btn>


export class TodoAppComponent implements OnInit {

  private appTitle:string;
  private list: Todolist;

  constructor(list: Todolist) {

    console.log('list items=' + list.items);
    this.appTitle='TODOS1';
    this.list=list;


  }

  ngOnInit() {
  }

  countUnDone(): number{
    return this.list.items.filter(item => item.done === false).length;

  }

}


//string is immutable. array is not immutable
