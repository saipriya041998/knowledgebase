import { Component, OnInit } from '@angular/core';
import { KBArticles } from 'src/app/kbarticles';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searcharticle',
  templateUrl: './searcharticle.component.html',
  styleUrls: ['./searcharticle.component.scss']
})
export class SearcharticleComponent implements OnInit {
arr_search: KBArticles[] = [];
id: number;
  constructor(private _data: CommonHttpService, private _actroute: ActivatedRoute) { }

  ngOnInit() {
      this._actroute.params.subscribe(
          (x) => {
              this.id = this.id;
              console.log(this.id);
          }
      );
      this._data.getSearchById().subscribe(
          (x: KBArticles[]) => {
              this.arr_search = x;
              console.log(this.arr_search);

          }
      );
  }
  onSearch(value) {
      console.log(value);
      if (value != '') {
        this.arr_search = this.arr_search.filter(x => x.ArticleName.indexOf(value) != -1);
          console.log('yes');
      } else {
        this._data.getSearchById().subscribe(
          (data: KBArticles[]) => {
            this.arr_search = data;
          },
          function(error) {
            alert(error);
          },
          function() {}
        );
      }
  }

}
