import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { Routes, RouterModule } from '@angular/router';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'product',data:{preload:true},loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'addtask',component:AddtaskComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'},
];

export const routing=RouterModule.forRoot(arr);
