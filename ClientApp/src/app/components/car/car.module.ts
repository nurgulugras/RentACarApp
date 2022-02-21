import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CarsRoutingModule } from './cars-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { CarAddUpdateComponent, CarDeleteComponent, CarListComponent } from '.';


const COMPONENTS=[CarDeleteComponent,CarListComponent,CarAddUpdateComponent]
const MODULES=[CommonModule,SharedComponentsModule,CarsRoutingModule,FormsModule,NgxLoadingModule]

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [],
  exports:[COMPONENTS]
})
export class CarModule { }
