import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { EditreactiveComponent } from './userdisplay/editreactive/editreactive.component';
import { MenuComponent } from './menu/menu.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
EdittaskComponent,
UserdisplayComponent,
SignupreactiveComponent,
EditreactiveComponent,
TaskdisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
