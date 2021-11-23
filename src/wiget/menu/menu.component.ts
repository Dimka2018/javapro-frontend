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
    this.docService.createArticle()
      .subscribe(id => this.router.navigate([`/new-article/${id}`]));
  }

  switchExpand() {
    this.expanded = !this.expanded
  }
}
