import {Component, OnDestroy, OnInit} from '@angular/core';
import {Editor, toDoc, toHTML, Toolbar} from "ngx-editor";
import {DocumentService} from "../../service/document.service";
import {Article} from "../../model/article";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleMapper} from "../../mapper/article.mapper";

@Component({
  selector: 'new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit, OnDestroy {

  article: Article = new Article();
  html: string = '';
  editor!: Editor;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];

  constructor(private docService: DocumentService, private route: ActivatedRoute, private mapper: ArticleMapper) {}

  onChange(html: string) {
    console.log(this.article)
    let articleToUpdate = this.mapper.docToArticle(toDoc(html), this.article.id, this.article.title);
    this.docService.saveDoc(toDoc(html))
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.article.title = "New Article"
    this.article.id = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
