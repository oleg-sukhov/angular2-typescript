import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AwesomePipe } from './awesome.pipe'
import { HightlightDirective } from './hightlight.directive'

@NgModule({
    imports: [ CommonModule ],
    declarations: [ AwesomePipe, HightlightDirective ],
    exports:[ AwesomePipe, HightlightDirective, CommonModule, FormsModule ]
})
export class SharedModule {

}