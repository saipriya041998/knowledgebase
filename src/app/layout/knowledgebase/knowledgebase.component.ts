import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { KBArticles } from '../../Models/kbarticles';
import { ArticleService } from '../../services/appservices/article.service';
// import { Item } from '@syncfusion/ej2-splitbuttons';
import _ from 'lodash';

@Component({
    selector: 'app-knowledgebase',
    templateUrl: './knowledgebase.component.html',
    styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {

    constructor(private router: Router, private act: ActivatedRoute, private _data: ArticleService) {}
    isloading = false;
    Article_Header: string;
    show = true;
    arr: KBArticles[] = [];
    // artcle: KBArticles[];
    // article: KBArticles[];
    // show_add_article = false;
    all_articles: KBArticles[] = [];

    ngOnInit() {
        if (this.all_articles.length==0) {
            // console.log(this.all_articles.length);
            this.show=false;
        }
        this.getArticles();
    }
    // logic for My-Article
    getAdminArticles() {
        this.Article_Header = '/MY Articles';
        this._data.getAdminArticles().subscribe(
            (data: KBArticles[]) => {
                //  console.log(data);
                this.arr = data;
                this.all_articles = this.arr['kbArticles'];
            }
        );
    }

    getArticles() {
        this._data.getAllKbArticle().subscribe(

            (data: KBArticles[]) => {
                this.arr = data;
                console.log(this.arr);

                // this.artcle = _.toArray(this.arr);
                this.all_articles = this.arr['kbArticles'];
                this.isloading = false;
                console.log(this.all_articles);
                // this.article = this.artcle;
                // console.log(this.article);
            },
            function (error) {
                // console.log('Internal Server:500');
            },
            function () { }
        );
    }
    // navigating to other components
    onReadMore(item) {
        // this.router.navigate(['/knowledge-base/readmore', item.articleId]);
        this.router.navigate(['/knowledge-base/readmore'], { queryParams: { ArticleId: item.articleId } });
    }

    onEditArticle(item) {
        this.router.navigate(['/knowledge-base/edit'], { queryParams: { ArticleId: item.articleId } });
    }


    onFilterCheck(value) {
        if (value !== '') {
            this._data.getCategoriesById(value).subscribe(
                (data: KBArticles[]) => {
                    console.log(data);
                    this.arr = data;
                    this.all_articles = this.arr['kbArticles'];
                });
        } else {
            this._data.getAllKbArticle().subscribe(

                (data: KBArticles[]) => {
                    this.arr = data;
                    console.log(this.arr);
                    // var arr = _.values(arr);
                    this.all_articles = this.arr['kbArticles'];
                    // console.log(this.artcle[1]);
                    // this.article = this.artcle;
                    // console.log(this.article[1]);
                },
                function (error) {
                    alert(error);
                },
                function () { }
            );
        }
    }

    // search
    onSearchClick(value) {
        if (value != "") {
            //this.artcle3[1]=this.artcle[1];
            //  console.log("vinay"+this.artcle3);
            this._data.getArticleBySearch(value).subscribe(
                (data: KBArticles[]) => {

                    console.log(data);
                    this.arr = data;
                    this.all_articles = this.arr['kbArticles'];
                });
        } else {
            this._data.getAllKbArticle().subscribe(

                (data: KBArticles[]) => {
                    this.arr = data;
                    console.log(this.arr);
                    // var arr = _.values(arr);
                    this.all_articles = this.arr['kbArticles'];
                    // console.log(this.artcle[1]);
                    // this.article = this.artcle;
                    // console.log(this.article[1]);
                },
                function (error) {
                    alert(error);
                },
                function () { }
            );
        }
    }
}
