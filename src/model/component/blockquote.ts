import {ArticleComponent} from "./article-component";

export class Blockquote extends ArticleComponent{
  content: ArticleComponent[]

  constructor( content: ArticleComponent[]) {
    super("BLOCKQUOTE");
    this.content = content
  }
}
