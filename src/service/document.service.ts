import {Injectable} from "@angular/core";
import {Article} from "../model/article";

@Injectable({providedIn: 'root'})
export class DocumentService {

  public saveDoc(content: Record<string, any>): void {
    console.log(content)
  }

  public createArticle(): Article {
    return new Article()
  }

}
