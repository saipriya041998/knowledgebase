import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { ResolverproductComponent } from './resolverproduct/resolverproduct.component';
=======
import { UserGuardComponent } from './user-guard/user-guard.component';

=======
import { ReactiveFormsModule } from '@angular/forms';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
>>>>>>> 13b0035bd4f5c3336d1e9f6585788abce13692ca
=======
<<<<<<< HEAD
>>>>>>> 79cb1c18ca47d1146f0afef73504ef40953572e5
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';

import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { MenuComponent } from './menu/menu.component';
=======
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { EditreactiveComponent } from './userdisplay/editreactive/editreactive.component';
import { MenuComponent } from './menu/menu.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
<<<<<<< HEAD
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
=======
>>>>>>> 3ad3464a6b17d693383bfa18b40fbb2da03d2bbc
>>>>>>> 8e256dda19f68dee24ec93fdcf22199f6f31243c

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    UserdisplayComponent,
<<<<<<< HEAD
SignupreactiveComponent,
ResolverproductComponent
=======
UserGuardComponent,

>>>>>>> 13b0035bd4f5c3336d1e9f6585788abce13692ca
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
=======
EdittaskComponent,
UserdisplayComponent,
SignupreactiveComponent,
EditreactiveComponent,
TaskdisplayComponent,
EditproductComponent,
MenuComponent,
LoginComponent

>>>>>>> 3ad3464a6b17d693383bfa18b40fbb2da03d2bbc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD

    ReactiveFormsModule
=======
    ReactiveFormsModule,
    FormsModule,ReactiveFormsModule
>>>>>>> 3ad3464a6b17d693383bfa18b40fbb2da03d2bbc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
