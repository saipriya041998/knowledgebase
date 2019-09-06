import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { KBArticles } from 'src/app/kbarticles';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {
  addForm: FormGroup;
  constructor( private fb: FormBuilder, private data: CommonHttpService) { }

  ngOnInit() {
    this.addForm = this.fb.group({
        // article_id: new FormControl(),
        article_name: new FormControl(),
        content: new FormControl(),
        category_id: new FormControl(),
        category_name: new FormControl(),
        category_by: new FormControl(),
        created_by: new FormControl(),
        created_by_name: new FormControl(),
        created_date: new FormControl(),
        modified_by: new FormControl(),
        modified_by_name: new FormControl(),
        modified_date: new FormControl(),
        ddlcategory_name: new FormControl()
      });

  }

  onAddArticle() {
     this.data.addArticle(
         new KBArticles(
             this.addForm.value.article_name,
         )
     )
  }

}


onUserSave() {
    this._data
      .addUser(
        new User(
          this.signup.value.user_email,
          this.signup.value.user_name,
          this.signup.value.user_password_group.user_password,
          this.signup.value.user_mobile_no
        )
      )
      .subscribe((x: any) => {
        alert("record added");
      });
  }
