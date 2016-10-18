import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AwesomePipe } from './awesome.pipe'
import { HightlightDirective } from './hightlight.directive'
import { HoverHightlightDirective } from './hover-hightlight.directive'

@NgModule({
    imports: [ CommonModule ],
    declarations: [ AwesomePipe, HightlightDirective, HoverHightlightDirective ],
    exports:[ AwesomePipe, HightlightDirective, HoverHightlightDirective, CommonModule, FormsModule ]
})
export class SharedModule {

}