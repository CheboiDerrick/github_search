import { Component, OnInit } from '@angular/core';
import { IRepo } from 'src/app/interfaces/repo';
import { GithubServiceService } from 'src/app/services/github-request.service';

@Component({
  selector: 'app-searchrepo',
  templateUrl: './searchrepo.component.html',
  styleUrls: ['./searchrepo.component.css']
})
export class SearchrepoComponent implements OnInit {
  repos: IRepo[]=[]
  repoName!:string
  found!: any
  constructor(private _requestRepo:GithubServiceService) { }

  searchByRepo() {
  this._requestRepo.searchByRepos(this.repoName).subscribe((repos: any) => {
  this.repos = repos.items;
  console.log(repos.items)
  });
  this.found = this.repos.filter(repo => repo.name.toLocaleLowerCase().includes(this.repoName.toLocaleLowerCase()));
  console.log(this.found);
  return this.found
  }


  ngOnInit(): void {
  }

}
