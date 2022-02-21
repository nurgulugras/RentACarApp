import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberDeleteComponent, MemberListComponent,MemberAddUpdateComponent, MemberRolComponent } from '.';


const routes: Routes = [
  {path:'add', component:MemberAddUpdateComponent, data:{title:"Member Add ", breadcrumb:"Member Identification"}},
  {path:'update/:id',component:MemberAddUpdateComponent, data:{title:"Member Update", breadcrumb:"Member Identification"}},
  {path:'delete/:id',component:MemberDeleteComponent, data:{title:"Member Delete", breadcrumb:"Member Identification"}},
  {path:'rol/:id',component:MemberRolComponent, data:{title:"Member Rol ", breadcrumb:"Member Identification"}},
  {path:'',component:MemberListComponent, data:{title:"Member List", breadcrumb:"Member Identification"}},
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MembersRouting { }
