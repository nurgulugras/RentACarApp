import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentComponent } from './components/rent/rent.component';




const routes: Routes = [
  { path: '', loadChildren:() =>import('./components/rent/rent.module').then(m=>m.RentModule)},
  { path: 'cars', loadChildren: () => import('./components/car/car.module').then(m => m.CarModule)},
  { path: 'members',loadChildren: () => import('./components/member/member.module').then(m => m.MemberModule)},
  { path: 'rent', loadChildren:() =>import('./components/rent/rent.module').then(m=>m.RentModule)},
  { path: 'renteds', loadChildren:() =>import('./components/rented/rented.module').then(m=>m.RentedModule)},
  { path: 'auth', loadChildren:() =>import('./auth/auth.module').then(m=>m.AuthModule)}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



