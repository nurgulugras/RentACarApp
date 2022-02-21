import { Routes, RouterModule } from '@angular/router';
import { RentedComponent } from './rented.component';

const routes: Routes = [
  {path:'', component:RentedComponent, data :{title:"Rental Page",breadcrumb:"Rented Car"}},

];

export const RentedRoutes = RouterModule.forChild(routes);
