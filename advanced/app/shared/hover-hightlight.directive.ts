import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core'

@Directive({
    selector: '[hoverHightlight]'
})
export class HoverHightlightDirective {
    private _defaultColor = 'red'

    constructor(private el: ElementRef, private renderer: Renderer) {}
    
    @Input() hoverHightlight: string

    @HostListener('mouseenter') OnMouseEnter() {
        this.hightlight(this.hoverHightlight || this._defaultColor);
    }

    @HostListener('mouseleave') OnMouseLeave() {
        this.hightlight(null)
    }

    private hightlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color)
    }
}