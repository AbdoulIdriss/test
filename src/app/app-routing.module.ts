import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component"; //we add the import for the admin component here
import {  UserComponent } from "./user/user.component"; //we add the import for the user component here
import { ReactifFormComponent } from './reactif-form/reactif-form.component';

const routes: Routes = [
  {
    path: 'reactif-form', component:ReactifFormComponent, title:'Use reactif form'
    //here is the path to the reactif form component
  },
  { 
    path:'user',
    component:UserComponent //here is the Path to the User Component
  },
  {
    path:'admin',
    component:AdminComponent //here is the Path to the Admin Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
