import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { KBArticles } from 'src/app/kbarticles';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readmorearticle',
  templateUrl: './readmorearticle.component.html',
  styleUrls: ['./readmorearticle.component.scss']
})
export class ReadmorearticleComponent implements OnInit {

    constructor(private _actroute:ActivatedRoute, private _data:CommonHttpService) { }
    arr:KBArticles[]=[];
    arr1=[];
    myarr:KBArticles[];
    id:number;
    name:string='';
    content:string='';
    pcontent:string='';
    catid:number;
    catname:string='';
    createdby:number;
    createdbyname:string='';
    createddate:string='';
    modifiedby:number;
    modifieddate:string='';
    ddlcatname:string='';

    ngOnInit() {
      this._actroute.params.subscribe(

        (x)=>{
          this.id=this.id;
        //   console.log(this.id);
        }
      );
      this._data.getArticleById(this.id).subscribe(

        (data:KBArticles[])=>{
          this.arr=data;
            this.arr1=Object.keys(this.arr);
            // console.log(this.arr);
            for(var prop of this.arr1) {
                this.myarr.push(this.arr1[prop]);
                // console.log(this.myarr);
            }
          this.name=data[0].ArticleName;
          this.content=data[0].Content;
          this.pcontent=data[0].PreviewContent;
          this.catid=data[0].CategoryId;
          this.catname=data[0].CategoryName;
          this.createdby=data[0].CreatedBy;
          this.createdbyname=data[0].CreatedByName;
          this.createddate=data[0].CreatedDate;
          this.modifiedby=data[0].ModifiedBy;
          this.modifieddate=data[0].ModifiedDate;
        }
      );
    //   console.log(this.arr);
    }
  }

