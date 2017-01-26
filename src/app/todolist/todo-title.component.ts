import {Component, OnInit, Input, ChangeDetectorRef, NgZone} from '@angular/core';


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


  constructor(cd: ChangeDetectorRef, zone: NgZone) {
    // cd.detach();
    // cd.reattach();
    // cd.detectChanges();
    zone.runOutsideAngular( ()=> {
      // setTimeout(()=> {this.title = 'dsfdsfs'; cd.detectChanges();}, 4000);

    });


  }

  ngOnInit() {
  }

}
