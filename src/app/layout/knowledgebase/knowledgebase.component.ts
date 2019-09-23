import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { KBArticles } from '../../Models/kbarticles';
import { ArticleService } from '../../services/appservices/article.service';
import _ from 'lodash';
import { Pagerinfo } from '../../Models/pagerInfo';
// import { Item } from '@syncfusion/ej2-splitbuttons';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})

export class KnowledgebaseComponent implements OnInit{
    Article_Header:string;
    show = false;
    arr: KBArticles[] = [];
    artcle: KBArticles[];
    article: KBArticles[];
    show_add_article: boolean = false;
    all_articles:any;
    page:Pagerinfo;
    //pagination
    Page:1;
    Categoryid:number=0;
    pageVariable:boolean=false;
    totalItem:number;
    totalPages:number;
    // spinner=false;

  constructor(private router: Router, private act: ActivatedRoute, private _data: ArticleService) {
    for(let i=1;i<=this.all_articles;i++){
        let Obj:[];
        this.all_articles.push(Obj);
      }

  }



  ngOnInit() {
    //   get articles through api
    this.getArticles();
    this.getPageInfo();

  }

  getAdminArticles(){
      this.Article_Header="/MY Articles";
    this._data.getAdminArticles(this.Page).subscribe(
        (data:KBArticles[])=>{
          //  console.log(data);
            this.arr=data;
            this.page=data['pagerInfo'];
            this.totalItem=this.page.totalItems;
            this.totalPages=this.page.totalPages;
            this.all_articles=this.arr['kbArticles'];

        }
    )
}
getPageInfo(){
    this._data.getAllKbArticle().subscribe(

        (data: KBArticles[]) => {
          this.arr = data;

          this.page=data['pagerInfo'];
          this.totalItem=this.page.totalItems;
          this.totalPages=this.page.totalPages;
         // this.totalPages=this.totalPages-4;

          console.log(this.page.totalItems)
          console.log(this.page);

          // this.artcle = _.toArray(this.arr);
          this.all_articles = this.arr['kbArticles'];
          console.log(this.all_articles);
          this.article = this.artcle;

          // console.log(this.article);
        },
        function (error) {

        },
        function () { }
      );

}
  getArticles() {
            //  this.spinner=false;
    this._data.getAllKbArticle().subscribe(

      (data: KBArticles[]) => {
        this.pageVariable=true;
        // this.spinner=true;
        this.arr = data;
        console.log(this.arr);
        console.log(this.arr);
       //    this.page=data['pagerInfo'];
        console.log(this.page);

        // this.artcle = _.toArray(this.arr);
        this.all_articles = this.arr['kbArticles'];
        console.log(this.all_articles);
        this.article = this.artcle;

        // console.log(this.article);
      },
      function (error) {
        alert('Internal Server:500');
      },
      function () { }
    );
  }
  onReadMore(item) {
    this.router.navigate(['/knowledge-base/readmore'], { queryParams: { ArticleId: item.articleId } });
  }
  onEditArticle(item)
  {
    this.router.navigate(['/knowledge-base/edit'], { queryParams: { ArticleId: item.articleId } });
  }

  onFilterCheck(value)
  {
    //   this.spinner=false;
    this.Categoryid=value;
      if(value !=''){
    this._data.getCategoriesById(value).subscribe(
      (data:KBArticles[])=>
        {
            console.log(data);

          this.arr=data;
        //   this.spinner=true;
          this.page=data['pagerInfo'];
          this.totalItem=this.page.totalItems;
          this.totalPages=this.page.totalPages;
          this.all_articles=this.arr['kbArticles'];
        });
    }
    else{
        this._data.getAllKbArticle().subscribe(

            (data: KBArticles[]) => {
              this.arr = data;
              console.log(this.arr);
            // var arr = _.values(arr);
           this.all_articles = this.arr['kbArticles'];

            console.log(this.artcle[1]);
            this.article=this.artcle;
            console.log(this.article[1]);
            },
            function(error) {
              alert(error);
            },
            function() {}
          );
    }
}

// search
onSearchClick(value) {
    // this.spinner=false;
    if (value != "") {
      this._data.getArticleBySearch(value).subscribe(
        (data:KBArticles[])=>
          {
            //   this.spinner=true;
            console.log(data);
            this.arr=data;
            this.all_articles= this.arr['kbArticles'];
          });
    } else {
        this._data.getAllKbArticle().subscribe(

            (data: KBArticles[]) => {
              this.arr = data;
              console.log(this.arr);
            // var arr = _.values(arr);
           this.all_articles = this.arr['kbArticles'];
            console.log(this.artcle[1]);
            this.article=this.artcle;
            console.log(this.article[1]);
            });
    }
  }
  loadPage(number:number) {

    console.log(this.page);
    number=this.Page;
    console.log("number"+number);
    if (number != 0) {
        this._data.getPageByNumber(this.page,this.Categoryid).subscribe(
          (data:KBArticles[])=>
            {
              console.log(data);


              this.arr=data;
              this.all_articles= this.arr['kbArticles'];
            });
      }

  }
}
