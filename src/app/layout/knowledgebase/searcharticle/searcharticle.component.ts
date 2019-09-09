import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcharticle',
  templateUrl: './searcharticle.component.html',
  styleUrls: ['./searcharticle.component.scss']
})
export class SearcharticleComponent implements OnInit {
<<<<<<< HEAD
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
=======

  constructor() { }

  ngOnInit() {
>>>>>>> a750595323a0ff2c1be31a1448899daacd6320c9
  }

}
