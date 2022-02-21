import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { LoginComponent, RegisterComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes
  ],
  declarations: [LoginComponent,RegisterComponent]
})
export class AuthModule { }
