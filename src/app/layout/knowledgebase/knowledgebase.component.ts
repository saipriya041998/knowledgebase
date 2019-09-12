import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { KBArticles } from '../../Models/kbarticles';
import { ArticleService } from '../../services/appservices/article.service';
import _ from 'lodash';
// import { Item } from '@syncfusion/ej2-splitbuttons';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {

  constructor(private router: Router, private act: ActivatedRoute, private _data: ArticleService) {

  }
  Article_Header:string;
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
  getAdminArticles(){
      this.Article_Header="/MY Articles";
    this._data.getAdminArticles().subscribe(
        (data:KBArticles[])=>{
          //  console.log(data);
            this.arr=data;
            this.all_articles=this.arr['kbArticles'];
        }
    )
}

  getArticles() {
    this._data.getAllKbArticle().subscribe(

      (data: KBArticles[]) => {
        this.arr = data;
        console.log(this.arr);

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
    // this.router.navigate(['/knowledge-base/readmore', item.articleId]);
    this.router.navigate(['/knowledge-base/readmore'], { queryParams: { ArticleId: item.articleId } });
  }
  onEditArticle(item)
  {
    this.router.navigate(['/knowledge-base/edit'], { queryParams: { ArticleId: item.articleId } });
  }

  onSideBarClick(value)
  {
      if(value !=''){
    this._data.getCategoriesById(value).subscribe(
      (data:KBArticles[])=>
        {
            console.log(data);
          this.arr=data;
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
onSideBarClick2(value) {
    if (value != "") {
        //this.artcle3[1]=this.artcle[1];
      //  console.log("vinay"+this.artcle3);
      this._data.getArticleBySearch(value).subscribe(
        (data:KBArticles[])=>
          {

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
            },
            function(error) {
              alert(error);
            },
            function() {}
          );
    }
  }

//   getAdminArticles(){
//     this._data.getAdminArticles().subscribe(
//         (data:KBArticles[])=>{
//             this.arr=data;
//             this.artcle=_.toArray(this.arr);
//         }
//     )
// }

//   openAdd() {
    //     this.show_add_article = true;
    //   }
}
