import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { RentComponent } from './rent.component';

const routes: Routes = [
  {path:'', component:RentComponent, data :{title:"Rental Page",breadcrumb:"Rent A Car"}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentRoutes { }
