import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserInfo} from "../model/user-info";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = environment.url;

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get( `${this.url}/api`);
  }

  getIcons() {
    return[
        {
          name: 'user'
        },
        {
          name: 'envelope'
        },
        {
          name: 'calendar'
        },
        {
          name: 'map'
        },
        {
          name: 'phone'
        },
        {
          name: 'lock'
        }
        ]
    }
}
