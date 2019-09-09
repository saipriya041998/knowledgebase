import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Rx';


import * as _ from 'lodash';
import { Router, Params } from '@angular/router';
import { CommonHttpService } from './../../shared/common-http.service';

@Injectable()
export class ArticleService {
	constructor(
        private http: HttpClient, public router: Router,
        private CommonHttpService: CommonHttpService
    )
	{

	}
	public getArticleById(data: any): Promise<any> {
        return this.CommonHttpService.globalGetService("https://510e3c09.ngrok.io/api/KB/GetReadArticle", data)
            .then(data => {
                return data;
            });
    }

}
