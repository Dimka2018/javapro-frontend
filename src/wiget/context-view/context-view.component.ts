import {ElementRef, QueryList, ViewChildren} from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import {Article} from "../../model/article";
import {DocumentService} from "../../service/document.service";
import {ActivatedRoute} from "@angular/router";
import {ArticleMapper} from "../../mapper/article.mapper";
import {Editor} from "ngx-editor";

@Component({
  selector: 'context-view',
  templateUrl: './context-view.component.html',
  styleUrls: ['./context-view.component.scss']
})
export class ContextViewComponent {

  article: Article = new Article();
  editor!: Editor;
  html: string = '';

}
