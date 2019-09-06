import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {

  constructor(private act:ActivatedRoute) { }
  show=false;

  ngOnInit() {
  }


  onClickOpenAdd() {

  }
}
