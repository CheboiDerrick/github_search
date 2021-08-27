import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubServiceService{
    private username = '';
    // private client_id = 'd9308aacf8b204d361fd';
    // private client_secret='62551cc02cee983fff0bac41baf170eb5a312c1c';
    
    constructor(private _http:HttpClient){
        console.log('Github Service Init...');
    }
    
    requestUser(){
        // return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        return this._http.get('https://api.github.com/users/'+this.username)
    }
    
    getRepos(){
        // return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
    }
    
    updateUsername(username:string){
        this.username = username;
    }
}