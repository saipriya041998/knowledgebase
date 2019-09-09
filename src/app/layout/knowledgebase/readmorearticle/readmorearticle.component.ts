import { Component, OnInit } from '@angular/core';
import { KBArticles } from 'src/app/kbarticles';
import { ActivatedRoute } from '@angular/router';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import _ from 'lodash';

@Component({
  selector: 'app-readmorearticle',
  templateUrl: './readmorearticle.component.html',
  styleUrls: ['./readmorearticle.component.scss']
})
export class ReadmorearticleComponent implements OnInit {

    constructor(private _actroute: ActivatedRoute, private _data: CommonHttpService) { }
    arr: KBArticles[] = [];
    artcle:KBArticles[];
   article:KBArticles[];
    arr1 = [];

    name = '';
    content = '';
    pcontent = '';
    catid: number;
    catname = '';
    createdby: number;
    createdbyname = '';
    createddate = '';
    modifiedby: number;
    modifieddate = '';
    ddlcatname = '';

    ngOnInit() {
    //   this._actroute.params.subscribe(

    //     (x) => {
    //       this.id = this.id;
    //       console.log(this.id);
    //     }
    //   );
      this._data.getArticleById(1).subscribe(

        (data: KBArticles[]) => {
          this.arr = data;
            console.log(this.arr);
            this.artcle = _.toArray(this.arr);
            console.log('arrar 1'+this.artcle[1]);
            this.article=this.artcle;
            console.log(this.article);

        },
         function(error) {
          alert(error);
        },
        function() {}
      );
          console.log(this.arr);
    }
  }


