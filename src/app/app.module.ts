import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
=======
<<<<<<< HEAD
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
<<<<<<< HEAD
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
=======
import { MenuComponent } from './menu/menu.component';
>>>>>>> c77c642347316db222eb920254ed7dc588dc5f53
=======
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
>>>>>>> 5cc9313251bdfb2a0eb3f7685ac592ee7fe3cccf
>>>>>>> 9d17802e095d8b440be6119afd8979fa3e64c94d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
<<<<<<< HEAD
    UserdisplayComponent,
<<<<<<< HEAD
SignupreactiveComponent
=======
MenuComponent
>>>>>>> c77c642347316db222eb920254ed7dc588dc5f53
=======
    TaskdisplayComponent
>>>>>>> 5cc9313251bdfb2a0eb3f7685ac592ee7fe3cccf
>>>>>>> 9d17802e095d8b440be6119afd8979fa3e64c94d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    FormsModule,ReactiveFormsModule
>>>>>>> 9d17802e095d8b440be6119afd8979fa3e64c94d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
