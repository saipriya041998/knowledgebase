import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResolverproductComponent } from './resolverproduct/resolverproduct.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { EditreactiveComponent } from './userdisplay/editreactive/editreactive.component';
import { MenuComponent } from './menu/menu.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    ProductdisplayComponent,
    ProductaddComponent,
    HomeComponent,
    AddtaskComponent,
    LoginComponent,
    SignupreactiveComponent,
    ResolverproductComponent,
    EdittaskComponent,
    UserdisplayComponent,
    SignupreactiveComponent,
    MenuComponent,
    TaskdisplayComponent,
    EditreactiveComponent,
    EditproductComponent

  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    routing,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
