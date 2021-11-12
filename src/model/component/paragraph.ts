import {TextContent} from "../content/text-content";
import {ArticleComponent} from "./article-component";
import {Content} from "../content/content";

export class Paragraph extends ArticleComponent{
  attributes: Record<string, any>
  content: Content[]

  constructor(attributes: Record<string, any>, content: TextContent[]) {
    super("paragraph");
    this.attributes = attributes
    this.content = content
  }
}
