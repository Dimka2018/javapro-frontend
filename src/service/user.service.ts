import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public login(user: User): Observable<User> {
    return this.http.post<User>('/api/login', user)
  }

}
