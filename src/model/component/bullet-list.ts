import {ArticleComponent} from "./article-component";
import {ListItem} from "./list-item";

export class BulletList extends ArticleComponent{

  attributes: Record<string, any>
  content: ListItem[]

  constructor(attributes: Record<string, any>, content: ListItem[]) {
    super("BULLET_LIST");
    this.attributes = attributes
    this.content = content
  }

}
