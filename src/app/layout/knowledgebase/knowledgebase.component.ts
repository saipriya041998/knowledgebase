import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KBArticles } from 'src/app/kbarticles';
import { ActivatedRoute } from '@angular/router';
import { CommonHttpService } from './../../shared/common-http.service';
import _ from 'lodash';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {

  constructor(private router:Router ,private act:ActivatedRoute,private _data: CommonHttpService) { }

  show=false;
  arr: KBArticles[] = [];
   artcle:KBArticles[];
   article:KBArticles[];

  ngOnInit() {
         //   get articles through api
    this._data.getAllKbArticle().subscribe(

        (data: KBArticles[]) => {
          this.arr = data;
          console.log(this.arr);
        // var arr = _.values(arr);
       this.artcle = _.toArray(this.arr);
        console.log(this.artcle[1]);
        this.article=this.artcle;
        console.log(this.article);
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
  }
  onReadMore(item:KBArticles){
    this.router.navigate(['/knowledge-base/readmore',item.ArticleId]);
  }


  onClickOpenAdd() {

  }
}
