import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent } from '.';

const routes: Routes = [
     { path: 'login',component: LoginComponent},
     { path: 'register',component: RegisterComponent}
];

export const AuthRoutes = RouterModule.forChild(routes);
