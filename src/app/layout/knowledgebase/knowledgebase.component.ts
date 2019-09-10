import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KBArticles } from 'src/app/Models/kbarticles';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../app/services/appservices/article.service'
import _ from 'lodash';
import { Item } from '@syncfusion/ej2-splitbuttons';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {

  constructor(private router: Router, private act: ActivatedRoute, private _data: ArticleService) {

  }

  show = false;
  arr: KBArticles[] = [];
  artcle: KBArticles[];
  article: KBArticles[];
  show_add_article: boolean = false;
  all_articles:any;

  ngOnInit() {
    //   get articles through api
    this.getArticles();
  }

  getArticles() {
    this._data.getAllKbArticle().subscribe(

      (data: KBArticles[]) => {
        this.arr = data;
        console.log(this.arr);

        // this.artcle = _.toArray(this.arr);
        this.all_articles = this.arr['kbArticles'];
        // console.log(this.artcle[1]);
        this.article = this.artcle;
        console.log(this.article);
      },
      function (error) {
        alert(error);
      },
      function () { }
    );
  }
  onReadMore(item: KBArticles) {
    this.router.navigate(['/knowledge-base/readmore', item.articleId]);
  }

  onClickEdit(articleArr:KBArticles) {
    this.router.navigate(['/knowledge-base/edit/', articleArr.articleId]);
  }

  openAdd() {
    this.show_add_article = true;
  }
}
