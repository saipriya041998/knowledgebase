import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserdataService } from '../userdisplay/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
login: FormGroup;
  constructor(private fb: FormBuilder, private udata: UserdataService, private router: Router) { }


  ngOnInit() {this.login = this.fb.group({
    user_email: new FormControl(),
    user_password: new FormControl()
  });
  }
  onLoginSubmit() {
    this.udata.login(this.login.value.user_email,
      this.login.value.user_password);
    if (this.udata.redirectURL) {
        this.router.navigateByUrl(this.udata.redirectURL);
      } else {
        this.router.navigate('/users');
      }
  }

}
