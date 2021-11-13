import {ArticleComponent} from "./article-component";

export class ListItem extends ArticleComponent {

  content: ArticleComponent[]

  constructor(content: ArticleComponent[]) {
    super("LIST_ITEM")
    this.content = content
  }
}
