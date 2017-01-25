import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input class="new-todo"
           [hidden]="flag"
           #input
           [placeholder]="text"
           (keydown.enter)="dispatchEvent((input.value))"
           autofocus>
  `,
  styles: []
})
export class TodoInputComponent implements OnInit {

  @Output() add = new EventEmitter<string>();
  @ViewChild('input') input: ElementRef;
  // @Output() add: EventEmitter<string>;
  private text:string;
  // type = 'text';
  flag=false;
  private _renderer : Renderer;



  constructor(public renderer: Renderer) {
    this.text='What needs to be done?';
    this._renderer=renderer;
    // setTimeout(()=> this.type = 'date', 5000 );
    // this.add = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  private  dispatchEvent(value){
    console.log(this.input);
    this.add.emit(value);
    this._renderer.setElementProperty(this.input.nativeElement,'value','');
  }

}
