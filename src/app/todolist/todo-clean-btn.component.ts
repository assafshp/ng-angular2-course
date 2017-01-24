import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-clean-btn',
  template: `
    <button (click)="clear.emit()" 
            class="clear-completed">{{ label }}
    </button>
  `,
  styles: []
})
export class TodoCleanBtnComponent{

  @Input() label: string;
  @Output() clear = new EventEmitter<void>();




}
