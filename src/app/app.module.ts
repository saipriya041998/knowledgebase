import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
=======
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
>>>>>>> 5cc9313251bdfb2a0eb3f7685ac592ee7fe3cccf

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserdisplayComponent,
SignupreactiveComponent
=======
    TaskdisplayComponent
>>>>>>> 5cc9313251bdfb2a0eb3f7685ac592ee7fe3cccf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
