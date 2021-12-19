import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaderimg]'
})
export class HeaderimgDirective {


  constructor(private el: ElementRef,
              private renderer: Renderer2) {
   
    this.renderer.addClass(this.el.nativeElement, 'fondo');


  }
    
    
  

          
}
