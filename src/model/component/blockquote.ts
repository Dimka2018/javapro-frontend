import {TextContent} from "../content/text-content";
import {Paragraph} from "./paragraph";
import {ArticleComponent} from "./article-component";

export class Blockquote extends ArticleComponent{
  content: ArticleComponent[]

  constructor( content: ArticleComponent[]) {
    super("blockquote");
    this.content = content
  }
}
