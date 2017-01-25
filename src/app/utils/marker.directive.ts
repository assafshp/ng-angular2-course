import {Directive, Renderer, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appMarker]' //attribute
})
export class MarkerDirective {

  // @HostBinding() style = '';
  // @HostBinding() hidden = '';

  private element: ElementRef;
  private renderer: Renderer;


  constructor(element: ElementRef, renderer: Renderer) {
    this.element = element;
    this.renderer = renderer;

    console.log(element);

  }

  @HostListener('mouseover')
  private mark(){
    console.log('mark element');
    // this.renderer.setElementStyle(this.element.nativeElement,'background-color','yellow');
    this.setBackground(true);

  }

  @HostListener('mouseout')
  private unmark(){
    console.log('unmark element');
    this.setBackground(false);
  }


  private setBackground(flag:boolean){
    const _color= flag ? 'yellow' : '';
    this.renderer.setElementStyle(this.element.nativeElement,'background-color',_color);
    // this.style = 'background-color: ${_color}';

  }
}
