import { Component, Input, OnInit } from '@angular/core';

import { GithubServiceService } from 'src/app/services/github-request.service';
import { User } from 'src/app/classes/user';
import { Repo } from 'src/app/classes/repo';

@Component({
  selector: 'app-github-repository',
  templateUrl: './github-repository.component.html',
  styleUrls: ['./github-repository.component.css']
})
export class GithubRepositoryComponent implements OnInit {
  @Input() repos: Repo[] = [];
  
  constructor(private _githubService: GithubServiceService) {
    console.log('Github Component Init...');
    console.log(this.repos);
  }

  ngOnInit(): void {
  }
  

}
