import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { UserGuardComponent } from './user-guard/user-guard.component';

=======
import { ReactiveFormsModule } from '@angular/forms';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
=======
<<<<<<< HEAD
>>>>>>> 79cb1c18ca47d1146f0afef73504ef40953572e5
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';

import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
UserGuardComponent,

=======
<<<<<<< HEAD
    LoginComponent,
EdittaskComponent
=======
<<<<<<< HEAD
>>>>>>> 79cb1c18ca47d1146f0afef73504ef40953572e5
    UserdisplayComponent,
SignupreactiveComponent,
MenuComponent,

    TaskdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
