import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as $ from 'jquery';
import { KBArticles } from '../Models/kbarticles';
@Injectable()
export class CommonHttpService {
    Edit_Fetch_URL: string = 'https://f2cd7047.ngrok.io/api/KB/GetKBArticlesById?ArticleId=1';
    CAT_URL = 'https://f2cd7047.ngrok.io/api/KB/GetCategories';
    ReadMore_URL = 'https://f2cd7047.ngrok.io/api/KB/GetReadArticle?ArticleId=';
    GetAllArticles ='https://f2cd7047.ngrok.io/api/KB/GetArticles?getall=0&categ=1';

    Search_article='https://f2cd7047.ngrok.io/api/KB/GetArticles?getall=0&categ=1&Page=1&SearchString=hundred';

    INSERT_URL ='https://f2cd7047.ngrok.io/api/KB/InsertUpdateKBAricles';
    CategoryId1='https://f2cd7047.ngrok.io/api/KB/GetArticles?getall=0&categ=1';
    CategoryId2='https://f2cd7047.ngrok.io/api/KB/GetArticles?getall=0&categ=2';
    CategoryId3='https://f2cd7047.ngrok.io/api/KB/GetArticles?getall=0&categ=3';

  constructor(private http: HttpClient, private AngHttp: Http) { }
  getCategory() {
    throw new Error("Method not implemented.");
  }
  editArticle(arg0: KBArticles) {
    throw new Error("Method not implemented.");
  }
  // Edit_Fetch_URL: string = 'https://510e3c09.ngrok.io/api/KB/GetKBArticlesById?ArticleId=1';
  // CAT_URL = 'https://510e3c09.ngrok.io/api/KB/GetCategories';
  // ReadMore_URL = 'https://510e3c09.ngrok.io/api/KB/GetReadArticle?ArticleId=1';
  // GetAllArticles = 'https://510e3c09.ngrok.io/api/KB/GetArticles?getall=0&categ=1';

  // Search_article = 'https://510e3c09.ngrok.io/api/KB/GetArticles?getall=0&categ=1&Page=1&SearchString=hundred';

  // INSERT_URL = 'https://510e3c09.ngrok.io/api/KB/InsertUpdateKBAricles';

  // public getAllKbArticle() {
  //   return this.http.get(this.GetAllArticles);
  // }


  //   public  getArticleById(ArticleId){
  //     return this.http.get(this.ReadMore_URL+ArticleId);
  //   }

  // public getSearchById() {
  //   return this.http.get(this.Search_article);
  // }

  // // began  knowledge base article methods
  // public getKbArticleById(ArticleId) {
  //   console.log(ArticleId);
  //   return this.http.get(this.Edit_Fetch_URL + ArticleId);
  // }

  // insert logic here
  // public addArticle(array) {
  //   let body = JSON.stringify(array);
  //   let head = new HttpHeaders().set("Content-Type", "application/json");
  //   console.log(array);
  //   return this.http.post(this.INSERT_URL, body, { headers: head });
  // }
  // public getCategoriesById() {
  //   console.log();
  //   return this.http.get(this.CAT_URL);
  // }

  // // began  knowledge base article methods
  // public getKbArticleById(ArticleId) {
  //   console.log(ArticleId);
  //   return this.http.get(this.Edit_Fetch_URL + ArticleId);
  // }

  // insert logic here
  // public addArticle(array) {
  //   let body = JSON.stringify(array);
  //   let head = new HttpHeaders().set("Content-Type", "application/json");
  //   console.log(array);
  //   return this.http.post(this.INSERT_URL, body, { headers: head });
  // }
  // public getCategoriesById() {
  //   console.log();
  //   return this.http.get(this.CAT_URL);
  // }

  // public
  // end


  // public getCategory() {
  //   console.log();
  //   return this.http.get(this.CAT_URL);
  // }
  // public editArticle(updateArr) {
  //   let body = JSON.stringify(updateArr);
  //   let head = new HttpHeaders().set("Content-Type", "application/json");
  //   return this.http.put(this.INSERT_URL + updateArr, body, { headers: head });
  // }


  public globalPostService(url: string, data: any) {
    return this.http.post(url, data).toPromise();
  }

  public globalGetService(url: string, data: any) {
    var querystring = "?" + $.param(data);
    console.log(querystring);
    return this.http.get(url + querystring).toPromise().
      catch(e => {
        //console.log("error happend", e);
      });
  }

  public globalGetServiceByUrl(url: string, data: any) {
    return this.http.get(url + data).toPromise().
      catch(e => {
        //console.log("error happend", e);
      });
  }
  public globalPostStreamService(url: string, data: any, header) {
    return this.http.post(url, data, header).toPromise().catch(e => {
      //console.log("error happend", e);
      if (e.status == 401) {
        //console.log(e.statusText);
        // window.location.href = "../../access.html";
      }
    });

  }
  downloadfile(url, data) {
    var postData = new FormData();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Control-Allow-Credentials', 'true');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;
    //xhr.responseType = 'blob';
    xhr.onreadystatechange = function (e) {
      console.log(e);
    };
    xhr.onload = function (e) {
      var blob = xhr.response;
      this.saveOrOpenBlob(blob);
    }.bind(this)
    xhr.send(postData);
  }
  saveOrOpenBlob(blob) {
    console.log("blob", blob);
  }
  HttpBlobPostService(url: string, data: any) {
    return this.AngHttp.post(url, data, { responseType: ResponseContentType.Blob })
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError));
  }
  private extractData(res: Response) {
    // let body = res.json();
    return res || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    //console.error(errMsg);
    return Observable.throw(errMsg);
  }
  public async downloadResource(url: string): Promise<Blob> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Methods", "GET, POST");
    headers.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Blob>(url,
      { headers: headers, responseType: 'blob' as 'json' }).toPromise();
    //return file;
  }

  public getbyurl(url: string): Promise<any> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Methods", "GET, POST");
    headers.append("Access-Control-Allow-Origin", "*");
    return this.http.get<any>(url,
      { headers: headers, responseType: 'json' as 'json' }).toPromise();
    //return file;
  }
}
