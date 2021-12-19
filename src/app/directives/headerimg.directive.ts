import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeaderimg]'
})
export class HeaderimgDirective {
  @Input() name: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    console.log(this.name);
    this.name = "Marvel";
    switch (this.name) {
      case 'Marvel':
        this.renderer.addClass(this.el.nativeElement, 'fondo');
        break;
      default:
        this.renderer.addClass(this.el.nativeElement, 'fondo');
        break;

    }
    
    
  }

          
}
