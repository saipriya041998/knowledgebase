import { KBArticles } from 'src/app/kbarticles';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> a750595323a0ff2c1be31a1448899daacd6320c9
import { CommonHttpService } from './../../shared/common-http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {
    arr: KBArticles[] = [];
  constructor(private _data: CommonHttpService,private act:ActivatedRoute) { }

<<<<<<< HEAD
  constructor(private router: Router , private act: ActivatedRoute, private _data: CommonHttpService) { }

  show = false;
  arr: KBArticles[] = [];
=======
>>>>>>> a750595323a0ff2c1be31a1448899daacd6320c9

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

<<<<<<< HEAD
  onReadMore(item: KBArticles) {
    this.router.navigate(['/readmore', item.ArticleId]);
  }

=======
>>>>>>> a750595323a0ff2c1be31a1448899daacd6320c9

}
