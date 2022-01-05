import {Component, OnDestroy, OnInit} from '@angular/core';
import {Editor, toDoc, Toolbar} from "ngx-editor";
import {DocumentService} from "../../service/document.service";
import {Article} from "../../model/article";
import {ActivatedRoute} from "@angular/router";
import {ArticleMapper} from "../../mapper/article.mapper";

@Component({
  selector: 'edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit, OnDestroy {

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
    let articleToUpdate = this.mapper.docToArticle(toDoc(html), this.article.id, this.article.title);
    this.article = articleToUpdate;
    this.docService.saveDoc(articleToUpdate)
      .subscribe();
  }

  onTitleChanged() {
    this.docService.saveDoc(this.article)
      .subscribe();
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.article.id = this.route.snapshot.paramMap.get('id')!.toString()
    this.docService.getArticle(this.article.id)
      .subscribe(article => {
        this.article = article
        this.html = this.mapper.articleToDoc(article)
      })
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
