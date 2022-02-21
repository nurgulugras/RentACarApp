import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { CarModule } from './components/car/car.module';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RentModule } from './components/rent/rent.module';
import { MemberModule } from './components/member/member.module';
import { FormsModule } from '@angular/forms';
import { RentedModule } from './components/rented/rented.module';
import { AuthModule } from './auth/auth.module';



const COMPONENT = [
  AppComponent,HomeComponent,NotfoundComponent
]
const MODULES = [
  BrowserModule,
  AppRoutingModule,
  LayoutModule,
  SharedComponentsModule,
  CarModule,
  RouterModule,
  HttpClientModule,
  MemberModule,
  RentModule,
  FormsModule,
  RentedModule,
  AuthModule
]

@NgModule({
  declarations: [COMPONENT],
  imports: [MODULES],
  bootstrap: [AppComponent]
})
export class AppModule { }
