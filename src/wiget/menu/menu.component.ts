import {Component} from '@angular/core';
import {DocumentService} from "../../service/document.service";
import {Router} from "@angular/router";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public expanded: Boolean = false;

  constructor(private docService: DocumentService, private router: Router) {
  }

  createArticle() {
    let article = this.docService.createArticle();
    this.router.navigate([`/new-article/${article.id}`]);
  }

  switchExpand() {
    this.expanded = !this.expanded
  }
}
