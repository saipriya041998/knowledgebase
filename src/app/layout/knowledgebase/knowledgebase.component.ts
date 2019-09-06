import { KBArticles } from 'src/app/kbarticles';
import { CommonHttpService } from './../../shared/common-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {
    arr: KBArticles[] = [];
  constructor(private _data: CommonHttpService) { }

  ngOnInit() {
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

}
