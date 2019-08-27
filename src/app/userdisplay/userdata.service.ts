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
    );
  }
}
