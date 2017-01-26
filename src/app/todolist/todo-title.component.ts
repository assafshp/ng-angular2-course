import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';


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


  constructor(cd: ChangeDetectorRef) {
    cd.detach();
    // this.title = title;
  }

  ngOnInit() {
  }

}
