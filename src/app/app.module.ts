import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { MenuComponent } from './menu/menu.component';
=======
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
>>>>>>> 5cc9313251bdfb2a0eb3f7685ac592ee7fe3cccf

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserdisplayComponent,
MenuComponent
=======
    TaskdisplayComponent
>>>>>>> 5cc9313251bdfb2a0eb3f7685ac592ee7fe3cccf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
