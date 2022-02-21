import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NrgCardBodyComponent, NrgCardComponent, NrgCardFooterComponent, NrgCardHeaderComponent} from '.';

const COMPONENTS = [NrgCardComponent,NrgCardBodyComponent,NrgCardFooterComponent,NrgCardHeaderComponent]
const MODULES = [CommonModule]

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class SharedComponentsModule { }
