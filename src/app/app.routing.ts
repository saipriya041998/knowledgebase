import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { Routes, RouterModule } from '@angular/router';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { EditreactiveComponent } from './userdisplay/editreactive/editreactive.component';
import { UserResolverService } from './userdisplay/user-resolver.service';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'product',data:{preload:true},loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'addtask',component:AddtaskComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'user',resolve:{udata:UserResolverService},component:UserdisplayComponent},
  {path:'adduser',component:SignupreactiveComponent},
  {path:'edituser/:user_email',component:EditreactiveComponent},
  {path:'login',canActivate:[UserGuardService],component:LoginComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
