import { DdlCatogoryName } from '../../../Models/ddlcategory';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { KBArticles } from 'src/app/kbarticles';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
import { ArticleService } from 'src/app/services/appservices/article.service';

@Component({
selector: 'app-searcharticle',
templateUrl: './searcharticle.component.html',
styleUrls: ['./searcharticle.component.scss']
})
export class SearcharticleComponent implements OnInit {
@Output() emit1=new EventEmitter();
@Output() emit2=new EventEmitter();

arr_search: KBArticles[] = [];
id: number;
arr: KBArticles[] = [];
artcle:KBArticles[];
article:KBArticles[];
//event emitter
arr1:DdlCatogoryName[];

constructor(private _data: ArticleService, private actroute: ActivatedRoute) { }

ngOnInit() {
this._data.getCategory().subscribe(
(data:DdlCatogoryName[])=>{
this.arr1=data;
console.log(this.arr1);

}
);
// this._actroute.params.subscribe(
// (x) => {
// this.id = this.id;
// console.log(this.id);
// }
// );
// this._data.getSearchById().subscribe(
// (x: KBArticles[]) => {
// this.arr_search = x;
// console.log(this.arr_search);

// }
// );
// }
// onSearch(value) {
// console.log(value);
// if (value != '') {
// this.arr_search = this.arr_search.filter(x => x.articleName.indexOf(value) != -1);
// console.log('yes');
// } else {
// this._data.getSearchById().subscribe(
// (data: KBArticles[]) => {
// this.arr_search = data;
// },
// function(error) {
// alert(error);
// },
// function() {}
// );
// }

}
updateCheckedOptions(id)
{
this.emit1.emit(id);
}
onSearchClick(searchTerm){
this.emit2.emit(searchTerm);
console.log(searchTerm);
}
// Search(){

// this._data.getCategoriesById().subscribe(

// (data: KBArticles[]) => {
// this.arr = data;
// // console.log(this.arr);
// // var arr = _.values(arr);
// this.artcle = _.toArray(this.arr);
// console.log(this.artcle[1]);
// this.article=this.artcle;
// // console.log(this.article[1]);
// },
// );
// }
// Search1(){
// this._data.getCategoriesById1().subscribe(

// (data: KBArticles[]) => {
// this.arr = data;
// // console.log(this.arr);
// // var arr = _.values(arr);
// this.artcle = _.toArray(this.arr);
// console.log(this.artcle[1]);
// this.article=this.artcle;
// //console.log("1"+this.article[1]);
// },
// );
// }
// Search2(){
// this._data.getCategoriesById2().subscribe(

// (data: KBArticles[]) => {
// this.arr = data;
// // console.log(this.arr);
// // var arr = _.values(arr);
// this.artcle = _.toArray(this.arr);
// console.log(this.artcle[1]);
// this.article=this.artcle;
// // console.log("2"+this.article[1]);
// },
// );
// }
// Search3(){
// this._data.getCategoriesById3().subscribe(

// (data: KBArticles[]) => {
// this.arr = data;
// // console.log(this.arr);
// // var arr = _.values(arr);
// this.artcle = _.toArray(this.arr);
// console.log(this.artcle[1]);
// this.article=this.artcle;
// // console.log("3"+this.article[1]);
// },
// );
// }



}
