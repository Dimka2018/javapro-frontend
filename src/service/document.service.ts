import {Injectable} from "@angular/core";
import {Article} from "../model/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class DocumentService {

  constructor(private http: HttpClient) {}

  public saveDoc(article: Article): void {

  }

  public createArticle(): Observable<Article> {
    return this.http.post<Article>("/api/article", {});
  }

}
