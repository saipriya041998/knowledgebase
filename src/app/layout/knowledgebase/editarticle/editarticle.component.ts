import { Component, OnInit } from '@angular/core';
import { KBArticles } from 'src/app/kbarticles';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DdlCatogoryName } from 'src/app/ddlcategory';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.scss']
})
export class EditarticleComponent implements OnInit {
  editForm: FormGroup;
  displayArticle:KBArticles;
  id:number;
  catname:string;
  catid:number;
  arr:DdlCatogoryName[]=[];

  constructor(private _data:CommonHttpService, private fb:FormBuilder,private _act:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    this.id=this._act.snapshot.params["ArticleId"];
    this._data.getKbArticleById(this.id).subscribe((x:KBArticles) => {
      this.displayArticle = x;
     //  console.log(this.arr);
     console.log(this.displayArticle.ArticleName);
    // this.displayArticle = x[0];
    this.editForm.patchValue({

     ArticleName:this.displayArticle.ArticleName,
     ArticleId: this.displayArticle.ArticleId,
     categoryId:this.displayArticle.CategoryId,
     CategoryName: this.displayArticle.CategoryName,
     previewcontent: this.displayArticle.PreviewContent,
     Content: this.displayArticle.Content



   });

    });
    this._act.params.subscribe(
     (x)=>{
       this.id=this.id;
      //  console.log(this.id);
     });
     this._data.getCategoriesById().subscribe(
       (data:DdlCatogoryName[])=>{
        //  console.log(data);
         this.arr = data;
         console.log(this.arr);
       });



    this.editForm = this.fb.group({
      ArticleName: new FormControl(null),
      ArticleId: new FormControl(null),
      CategoryName: new FormControl(null),
      CategoryId: new FormControl(null),
      Content: new FormControl(null),
      previewcontent: new FormControl(null)
      });

 }

  onEditArticle(){
    this._data.editArticle(
      new KBArticles(
        this.editForm.value.ArticleName,
        this.editForm.value.ArticleId,
        this.editForm.value.categoryId,
        this.editForm.value.CategoryName,
        this.editForm.value.Content,
        this.editForm.value.previewcontent,
        this.editForm.value.CreatedBy,
        this.editForm.value.CreatedByName,
        this.editForm.value.CreatedDate,
        this.editForm.value.ModifiedBy,
        this.editForm.value.ModifiedByName,
        this.editForm.value.ModifiedDate

      )
    )

    .subscribe(
      (x:any)=>{
        this._router.navigate['/edit']
      }
    )
  }
}

