import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
url:"https://nodejsapidemo.herokuapp.com/users/";
  constructor(private _http:HttpClient) { }
  getAllUsers(){
    return this._http.get(this.url);
  }

  addUser(newuser) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newuser);
    return this._http.post(this.url, body,{headers:head});
    // );
  }
}
currentUser;
  redirectURL: string;
  login(user_email: string, user_password: string) {
    if (user_email == "admin" && user_password == "1234") {
      this.currentUser = {
        user_email: user_email,
        password: user_password,
        isAdmin: true
      };
      return;
    }
    this.currentUser = {
      user_email: user_email,
      password: user_password,
      isAdmin: false
    };
  }
  logout() {
    this.currentUser = null;
    this.redirectURL = "";
    this._router.navigate([""]);
  }
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}

