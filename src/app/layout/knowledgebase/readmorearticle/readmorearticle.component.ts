import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KBArticles } from 'src/app/Models/kbarticles';
import { Subscriber, Subscription, observable } from 'rxjs';
import { ArticleService } from 'src/app/services/appservices/article.service';

import { CommonHttpService } from 'src/app/shared/common-http.service';
import _ from 'lodash';

@Component({
  selector: 'app-readmorearticle',
  templateUrl: './readmorearticle.component.html',
  styleUrls: ['./readmorearticle.component.scss']
})
export class ReadmorearticleComponent implements OnInit {
  constructor(private _actroute: ActivatedRoute, private _data: ArticleService) { }
  arr: KBArticles[] = [];
  showrecords = false;
    id: number;
    ngOnInit() {
        this.getArticleById();
    }

   getArticleById() {
    this.id = this._actroute.snapshot.params['id'];
    // console.log(this.id);
        this._data.getArticleById(this.id)
          .then(res => {
            // debugger;
            if (res) {
              if (!_.isEmpty(res)) {
                this.arr = res;
                this.showrecords = true;
                console.log('res', this.arr);
              } else {
                this.arr = [];
                console.log('failed');
                return false;
              }
            }
          }, error => {


          });
      }


}
