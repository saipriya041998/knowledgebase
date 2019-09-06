import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KBArticles } from 'src/app/kbarticles';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {

  constructor(private router:Router ,private act:ActivatedRoute) { }

  show=false;

  ngOnInit() {
  }
  onReadMore(item:KBArticles){
    this.router.navigate(['/readmore',item.ArticleId]);
  }


  onClickOpenAdd() {

  }
}
