import { KBArticles } from 'src/app/kbarticles';
import { CommonHttpService } from './../../shared/common-http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {
<<<<<<< HEAD
    arr: KBArticles[] = [];
  constructor(private _data: CommonHttpService) { }
=======

  constructor(private act:ActivatedRoute) { }
  show=false;
>>>>>>> f9a55853c1fc23830d691742aba7fd0cf6fdcc15

  ngOnInit() {
    //   get articles through api
    this._data.getKbArticleById(1).subscribe(

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


  onClickOpenAdd() {

  }
}
