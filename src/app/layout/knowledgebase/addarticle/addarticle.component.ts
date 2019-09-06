import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { KBArticles } from 'src/app/kbarticles';
import { DdlCatogoryName } from 'src/app/ddlcategory';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {
  addForm: FormGroup;
  constructor( private fb: FormBuilder, private data: CommonHttpService) { }
cat:DdlCatogoryName[]=[];
  ngOnInit() {
    this.data.getCategoriesById().subscribe(
        (data:DdlCatogoryName[])=>{
          this.cat=data;
          console.log(this.cat);
        }
      );
    this.addForm = this.fb.group({
        article_name: new FormControl(),
        content: new FormControl(),
        category_id: new FormControl(),
        category_name: new FormControl(),
      });

  }

  onAddArticle() {
     this.data.addArticle(
         new KBArticles(
            this.addForm.value.article_id,
             this.addForm.value.article_name,
             this.addForm.value.content,
             this.addForm.value.previewcontent,
             this.addForm.value.category_id,
             this.addForm.value.category_name,
             this.addForm.value.created_by,
             this.addForm.value.created_by_name,
             this.addForm.value.created_date,
             this.addForm.value.modified_by,
             this.addForm.value.modified_by_name,
             this.addForm.value.modified_date
         )).subscribe((x:any) =>
         {
            alert('done');
         });

         }
  }




// onUserSave() {
//     this._data
//       .addUser(
//         new User(
//           this.signup.value.user_email,
//           this.signup.value.user_name,
//           this.signup.value.user_password_group.user_password,
//           this.signup.value.user_mobile_no
//         )
//       )
//       .subscribe((x: any) => {
//         alert("record added");
//       });
//   }
