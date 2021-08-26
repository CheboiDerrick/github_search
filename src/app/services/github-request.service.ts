
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { IUser } from '../interfaces/user';
import { IRepo } from '../interfaces/repo';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user!: User
  repos: IRepo[] = []

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", 0, 0, 0, "");
  }
  userRequest(){
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<IUser>(environment.apiUrl).toPromise().then(response => {
        this.user.name = response.name;
        this.user.email = response.email;
        this.user.avatar = response.avatar;
        this.user.public_repos = response.public_repos;
        this.user.followers = response.followers;
        this.user.following = response.following
        this.user.join_date = response.join_date
        resolve()
      },
        error => {
          reject(error)
        })
    })
    return promise
  }
}
