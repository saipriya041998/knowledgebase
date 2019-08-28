import { Component } from '@angular/core';
import { Router, Route, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Team3';
  isloading:boolean=true;
  public constructor(private _router:Router){
    this.checkRouting(_router);
  }
  checkRouting(_router:Router){
    _router.events.subscribe(
      x=>{
        if(x instanceof NavigationStart){
          this.isloading=true;
        }
        if(x instanceof NavigationCancel || x instanceof NavigationEnd || x instanceof NavigationError){
          this.isloading=false;
        }
      }
    );
  }
}
