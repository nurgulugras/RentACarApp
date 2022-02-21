import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDeleteComponent, CarListComponent } from '.';
import { NotfoundComponent } from '../notfound/notfound.component';
import { CarAddUpdateComponent } from './car-add-update/car-add-update.component';

const routes: Routes = [
     { path: 'add',component: CarAddUpdateComponent, data :{title:"Add New Car",breadcrumb:"Car Identification"}},
     { path: 'update/:id',component: CarAddUpdateComponent, data :{title:"Car Edit",breadcrumb:"Car Identification"}},
     { path: 'delete/:id',component: CarDeleteComponent,  data :{ title:"Car Delete",breadcrumb:"Car Identification"}},
     { path: '',component: CarListComponent, data:{title:"Car List",breadcrumb:"Car Identification"}}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
