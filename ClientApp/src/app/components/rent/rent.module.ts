import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { RentComponent } from './rent.component';
import { NgxLoadingModule } from 'ngx-loading';
import { FormsModule } from '@angular/forms';
import { RentRoutes } from './rent.routing';

@NgModule({
  imports: [
    CommonModule,SharedComponentsModule,FormsModule,NgxLoadingModule,RentRoutes
  ],
  declarations: [RentComponent]
})
export class RentModule { }
