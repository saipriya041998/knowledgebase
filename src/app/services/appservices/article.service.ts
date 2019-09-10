import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Rx';


import * as _ from 'lodash';
import { Router, Params } from '@angular/router';
import { CommonHttpService } from './../../shared/common-http.service';

@Injectable()
export class ArticleService {
    // Edit_Fetch_URL: string = 'https://510e3c09.ngrok.io/api/KB/GetKBArticlesById?ArticleId=1';
    // CAT_URL = 'https://510e3c09.ngrok.io/api/KB/GetCategories';
    // ReadMore_URL = 'https://510e3c09.ngrok.io/api/KB/GetReadArticle?ArticleId=1';
    // GetAllArticles = 'https://510e3c09.ngrok.io/api/KB/GetArticles?getall=0&categ=1';
    // Search_article = 'https://510e3c09.ngrok.io/api/KB/GetArticles?getall=0&categ=1&Page=1&SearchString=hundred';
    // INSERT_URL = 'https://510e3c09.ngrok.io/api/KB/InsertUpdateKBAricles';

    Edit_Fetch_URL: string = 'https://f25ec8b4.ngrok.io/api/KB/GetKBArticlesById?ArticleId=';
    CAT_URL = 'https://f25ec8b4.ngrok.io/api/KB/GetCategories';
    //ReadMore_URL = 'https://f25ec8b4.ngrok.io/api/KB/GetReadArticle?ArticleId=1';
    ReadMore_URL = 'https://f25ec8b4.ngrok.io/api/KB/GetReadArticle';
    GetAllArticles = 'https://f25ec8b4.ngrok.io/api/KB/GetArticles?getall=0&categ=1';

    Search_article = 'https://f25ec8b4.ngrok.io/api/KB/GetArticles?getall=0&categ=1&Page=1&SearchString=hundred';

    INSERT_URL = 'https://f25ec8b4.ngrok.io/api/KB/InsertUpdateKBAricles';
    CategoryId1 = 'https://f25ec8b4.ngrok.io/api/KB/GetArticles?getall=0&categ=1';
    CategoryId2 = 'https://f25ec8b4.ngrok.io/api/KB/GetArticles?getall=0&categ=2';
    CategoryId3 = 'https://f25ec8b4.ngrok.io/api/KB/GetArticles?getall=0&categ=3';

    constructor(
        private http: HttpClient, public router: Router,
        private CommonHttpService: CommonHttpService
    ) {

    }
    public getArticleById(data: any): Promise<any> {
        return this.CommonHttpService.globalGetService(this.ReadMore_URL, data)
            .then(data => {
                return data;
            });
    }

    // insert logic here
    public addArticle(array) {
        let body = JSON.stringify(array);
        let head = new HttpHeaders().set("Content-Type", "application/json");
        console.log(array);
        return this.http.post(this.INSERT_URL, body, { headers: head });
    }
    public getCategoriesById() {
        console.log();
        return this.http.get(this.CAT_URL);
    }

    public getSearchById() {
        return this.http.get(this.Search_article);
    }

    public getKbArticleById(ArticleId) {
        console.log(ArticleId);
        return this.http.get(this.Edit_Fetch_URL + ArticleId);
    }

    // public getKbArticleById(data) {
    //     return this.CommonHttpService.globalGetService(this.Edit_Fetch_URL, data)
    //         .then(data => {
    //             return data;
    //         });
    // }

    public editArticle(updateArr) {
        let body = JSON.stringify(updateArr);
        let head = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put(this.INSERT_URL + updateArr, body, { headers: head });
    }

    public getAllKbArticle() {
        return this.http.get(this.GetAllArticles);
    }

    public updateArticle(data: any): Promise<any> {
        return this.CommonHttpService.globalPostService(this.INSERT_URL, data)
            .then(data => {
                return data;
            });
    }

}
