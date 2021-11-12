import {ArticleComponent} from "./article-component";
import {TextContent} from "../content/text-content";

export class Heading extends ArticleComponent {

  attributes: Record<string, any>
  content: TextContent[]

  constructor(attributes: Record<string, any>, content: TextContent[]) {
    super("heading");
    this.attributes = attributes
    this.content = content
  }
}
