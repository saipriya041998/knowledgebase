import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserGuardComponent } from './user-guard/user-guard.component';

import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';

import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
UserGuardComponent,

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
