import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent,NavbarComponent, NrgBreadcrumbComponent, SidebarComponent } from '.';
import { RouterModule } from '@angular/router';
import { CarsRoutingModule } from 'src/app/components/car/cars-routing.module';
import { RentRoutes } from 'src/app/components/rent/rent.routing';


const COMPONENTS = [
  NavbarComponent, FooterComponent, SidebarComponent,NrgBreadcrumbComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarsRoutingModule,
    RentRoutes
  ],
  declarations: [COMPONENTS],
  exports:[COMPONENTS]

})
export class LayoutModule { }
