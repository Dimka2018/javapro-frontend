import {Injectable} from "@angular/core";
import {Article} from "../model/article";

@Injectable({providedIn: 'root'})
export class DocumentService {

  public saveDoc(article: Article): void {

  }

  public createArticle(): Article {
    return new Article()
  }

}
