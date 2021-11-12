import {ArticleComponent} from "./article-component";
import {ListItem} from "./list-item";

export class OrderedList extends ArticleComponent{

  attributes: Record<string, any>
  content: ListItem[]

  constructor(attributes: Record<string, any>, content: ListItem[]) {
    super("ordered_list");
    this.attributes = attributes
    this.content = content
  }

}
