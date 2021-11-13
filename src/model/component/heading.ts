import {ArticleComponent} from "./article-component";
import {Text} from "../content/text";

export class Heading extends ArticleComponent {

  attributes: Record<string, any>
  content: Text[]

  constructor(attributes: Record<string, any>, content: Text[]) {
    super("HEADING");
    this.attributes = attributes
    this.content = content
  }
}
