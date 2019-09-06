import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {
    addForm: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.fb.group({
        article_id: new FormControl(),
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

  onAddArticle() {}

}


