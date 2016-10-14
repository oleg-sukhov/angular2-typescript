import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[hightlight]'
})
export class HightlightDirective {

    constructor(renderer: Renderer, element: ElementRef) {
        renderer.setElementStyle(element.nativeElement, 'color', 'orange');
    }
}