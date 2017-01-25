import {Directive, ElementRef, Renderer, OnInit} from '@angular/core';
import {element} from "protractor";

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit{


  constructor(private element: ElementRef, private renderer: Renderer) { }

  ngOnInit(): void {
    this.renderer.invokeElementMethod(this.element.nativeElement,'focus');
  }

}
