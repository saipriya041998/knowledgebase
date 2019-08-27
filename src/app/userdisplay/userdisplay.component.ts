import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.scss']
})
export class UserdisplayComponent implements OnInit {
  arr:User[]=[];
  userData:any;
  errormessage:string='';
    constructor(private _actroute:ActivatedRoute) {
      this.userData=this._actroute.snapshot.data["udata"];
    }
    ngOnInit() {
      this.arr=this.userData.data;
      this.errormessage=this.userData.errormessage;
    }
}
