import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KBArticles } from 'src/app/kbarticles';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonHttpService } from './../../shared/common-http.service';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {

  constructor(private router:Router ,private act:ActivatedRoute,private _data: CommonHttpService) { }

  show=false;
  arr: KBArticles[] = [];

  ngOnInit() {
         //   get articles through api
    this._data.getAllKbArticle(1).subscribe(

        (data: KBArticles[]) => {
          this.arr = data;
          console.log(this.arr);
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
  }

  onReadMore(item:KBArticles){
    this.router.navigate(['/readmore',item.ArticleId]);
  }


  onClickOpenAdd() {

  }

}
