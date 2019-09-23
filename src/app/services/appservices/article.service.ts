import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import * as appSettings from '../../../assets/constant.json';
import { AppConstant } from '../../app.constant';
import { CommonHttpService } from './../../shared/common-http.service';

@Injectable()
export class ArticleService {
    appSettings: any = appSettings;
    api_url: string;
    appendpoint: string;
    ReadMore_URL: string;
    cpDefaultUrl: string;
    cpDefaultUpdateUrl: string;
    Edit_Fetch_URL: string;
    CAT_URL: string;
    INSERT_URL: string;
    Search_article: string;
    GetAllArticles: string;
    GETCATEGORIESBYID:string;
    GETADMINARTICLES:string;

    constructor(
        private http: HttpClient, public router: Router,
        private CommonHttpService: CommonHttpService
    ) {
        this.api_url = AppConstant.API_ENDPOINT;
        this.appendpoint = this.api_url;
        this.ReadMore_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.READMORE;
        this.Edit_Fetch_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.FETCHARTICLEBYID;

        this.CAT_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETCATEGORIES;
        this.INSERT_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.INSERTARTICLE;
        this.Search_article = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.SEARCHARTICLE;
        this.GetAllArticles = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETALLARTICLE;
        this.GETADMINARTICLES = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETADMINARTICLES;
        this.GETCATEGORIESBYID = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETARTICLEBYID;
    }
    // readmore
    public getArticleById(data: any): Promise<any> {
        console.log(data);
        return this.CommonHttpService.globalGetService(this.ReadMore_URL, data)
            .then(data => {
                return data;
            },
                err => {
                    console.log(err);
                });
    }
    // insert logic
    public addArticle(data: any): Promise<any> {
        return this.CommonHttpService.globalPostService(this.INSERT_URL, data)
            .then(data => {
                return data;
        });
    }

    public getCategory() {
        console.log();
        return this.http.get(this.CAT_URL);
    }

    public getSearchById() {
        return this.http.get(this.Search_article);
    }

    public getKbArticleById(ArticleId) {
        console.log((this.Edit_Fetch_URL + ArticleId));
        return this.http.get(this.Edit_Fetch_URL + ArticleId);
    }
    public getCategoriesById(value) {
      return this.http.get(this.GETCATEGORIESBYID + value);
    }

    public getArticleBySearch(value) {
        return this.http.get(this.Search_article + value);
    }

    public getAllKbArticle() {
        return this.http.get(this.GetAllArticles);
    }

    public updateArticle(data: any): Promise<any> {
        return this.CommonHttpService.globalPostService(this.INSERT_URL, data).then(data => {
            return data;
        });
    }
    public getAdminArticles() {
        return this.http.get(this.GETADMINARTICLES);
    }
}
