import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { KBArticles } from 'src/app/kbarticles';
import _ from 'lodash';
import { ArticleService } from 'src/app/services/appservices/article.service';

=======
import { KBArticles } from 'src/app/kbarticles';
import { ActivatedRoute } from '@angular/router';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import _ from 'lodash';
>>>>>>> 242b6c5e61817ddff877714432ba9cd48c8041e0

@Component({
  selector: 'app-readmorearticle',
  templateUrl: './readmorearticle.component.html',
  styleUrls: ['./readmorearticle.component.scss']
})
export class ReadmorearticleComponent implements OnInit {

<<<<<<< HEAD
    constructor(private _actroute: ActivatedRoute, private article: ArticleService) { }
    arr: KBArticles[] = [];
    showrecords= false;
    id: number;
    ngOnInit() {
	this.getArticleById();
	}

   getArticleById() {
        let req = {
          ArticleId: 1
        };


        this.article.getArticleById(req)
          .then(res => {
            debugger;
            if (res) {
              if (!_.isEmpty(res)) {
                this.arr = res;
                this.showrecords = true;
                console.log('res', res);
              } else {
                this.arr = [];
                console.log('failed');
                return false;
              }
            }
          }, error => {


          });
      }


  }
=======
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


>>>>>>> 242b6c5e61817ddff877714432ba9cd48c8041e0
