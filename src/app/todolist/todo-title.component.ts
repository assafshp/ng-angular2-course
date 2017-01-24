import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-todo-title',
  template: `
    <h1>{{ title }}</h1>
    <!--<h1>{{ title?.value }}</h1>-->
  `,
 })
export class TodoTitleComponent implements OnInit {

  @Input()
  private title:string;



  ngOnInit() {
  }

}
