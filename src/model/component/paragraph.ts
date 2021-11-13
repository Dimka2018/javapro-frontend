import {Text} from "../content/text";
import {ArticleComponent} from "./article-component";
import {Content} from "../content/content";

export class Paragraph extends ArticleComponent{
  attributes: Record<string, any>
  content: Content[]

  constructor(attributes: Record<string, any>, content: Text[]) {
    super("PARAGRAPH");
    this.attributes = attributes
    this.content = content
  }
}
