import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { IRepo } from 'src/app/interfaces/repo';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
