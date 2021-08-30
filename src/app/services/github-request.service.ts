
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class GithubServiceService {
    private username = 'CheboiDerrick';
    private repo_name = ''

    constructor(private _http: HttpClient) {
        console.log('Github Service Init...');
    }

    requestUser() {
        return this._http.get(`https://api.github.com/users/${this.username}?client_id=${environment.client_id}&client_secret=${environment.client_secret}`)
    }

    searchByRepos(repoName: string) {
        this.repo_name = repoName
        return this._http.get(`https://api.github.com/search/repositories?q=${this.repo_name}*`)
    }

    getUserRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + environment.client_id + '&client_secret=' + environment.client_secret)

    }    

    updateUsername(username: string) {
        this.username = username;
    }
}