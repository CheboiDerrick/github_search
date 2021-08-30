import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubServiceService {
    private username = '';
    private repo_name = ''
    private client_id = '20a8d5241ac2df67cbc0';
    private client_secret = '046f7d7186d00765ba7c252f65ea58912c4336c8';

    constructor(private _http: HttpClient) {
        console.log('Github Service Init...');
    }

    requestUser() {
        return this._http.get(`https://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    }

    searchByRepos(repoName: string) {
        this.repo_name = repoName
        return this._http.get(`https://api.github.com/search/repositories?q=${this.repo_name}*`)
    }

    getUserRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)

    }    

    updateUsername(username: string) {
        this.username = username;
    }

}