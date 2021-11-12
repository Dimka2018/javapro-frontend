import {ArticleComponent} from "./article-component";

export class ListItem extends ArticleComponent {
  content: ArticleComponent[]

  constructor(content: ArticleComponent[]) {
    super("list_item")
    this.content = content
  }
}
