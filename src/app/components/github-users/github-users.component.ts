import { Component, OnInit } from '@angular/core';

import { GithubServiceService } from 'src/app/services/github-request.service';
import { User } from 'src/app/classes/user';
import { Repo } from 'src/app/classes/repo';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {
 
    user!:User
    repos:Repo[]=[];
    username:string='CheboiDerrick'
    
    constructor(private _githubService:GithubServiceService){
        console.log('Github Component Init...');   
    }
    
    search(){
        // this._githubService.updateUsername(this.username);
        
        this._githubService.requestUser().subscribe((user: any) => {
            this.user = user;
            console.log(user);

        });
        
        // this._githubService.getRepos().subscribe((repos: any) => {
        //     this.repos = repos;
        //     console.log(repos)
        // });
    }


  ngOnInit(): void {
  }

}
