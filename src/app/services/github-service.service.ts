import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { IUser } from '../interfaces/user';
import { IRepo } from '../interfaces/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  constructor() { }
}
