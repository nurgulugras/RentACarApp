import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { RentedComponent } from './rented.component';
import { RentedRoutes } from './rented.routing';



@NgModule({
  imports: [
    CommonModule,SharedComponentsModule,FormsModule,NgxLoadingModule,RentedRoutes
  ],
  declarations: [RentedComponent]
})
export class RentedModule { 
  
}
