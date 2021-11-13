import {Article} from "../model/article";
import {Injectable} from "@angular/core";
import {ArticleComponent} from "../model/component/article-component";
import {Paragraph} from "../model/component/paragraph";
import {TextContent} from "../model/content/text-content";
import {Blockquote} from "../model/component/blockquote";
import {OrderedList} from "../model/component/ordered-list";
import {ListItem} from "../model/component/list-item";
import {BulletList} from "../model/component/bullet-list";
import {Heading} from "../model/component/heading";
import {Content} from "../model/content/content";
import {Image} from "../model/content/image";

@Injectable({providedIn: 'root'})
export class ArticleMapper {

  docToArticle(doc: any, id?: Number, title?: string): Article {
    let article = new Article();
    article.id = id;
    article.title = title;
    article.content = doc.content.map((component: any) => this.toComponent(component))
    return article;
  }

  toComponent(component: any): ArticleComponent {
    let content = null;
    switch (component.type) {
      case "blockquote":
        if (component.content && component.content.length) {
          content = component.content.map((element: any) => this.toComponent(element));
        }
        return new Blockquote(content)
      case "ordered_list":
        content = component.content.map((content: any) => this.toComponent(content));
        return new OrderedList(component.attrs, content)
      case "bullet_list":
        content = component.content.map((content: any) => this.toComponent(content));
        return new BulletList(component.attrs, content)
      case "list_item":
        content = component.content.map((content: any) => this.toComponent(content));
        return new ListItem(content)
      case "heading":
        if (component.content && component.content.length) {
          content = component.content.map((content: any) => this.toContent(content));
        }
        return new Heading(component.attrs, content)
      default:
        if (component.content && component.content.length) {
          content = component.content.map((content: any) => this.toContent(content));
        }
        return new Paragraph(component.attrs, content)
    }
  }

  toContent(content: any): Content {
    switch (content.type) {
      case "image":
        return new Image(content.attrs);
      default:
        return new TextContent(content.text, content.marks || [])
    }
  }
}
