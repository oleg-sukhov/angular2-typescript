import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[highlight], input' })
export class HightlightDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue');
    console.log(
      `* Highlight called for ${el.nativeElement.tagName}`);
  }
}
