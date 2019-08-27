import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';
import { User } from './user';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.scss']
})
export class UserdisplayComponent implements OnInit {
arr:User[]=[];
  constructor(private _data:UserdataService) { }

  ngOnInit() {
    this._data.getAllUsers().subscribe(
    (data:User[])=>{
      this.arr=data;
    }
    );
  }
}
