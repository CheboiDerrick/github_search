import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchrepoComponent } from './components/searchrepo/searchrepo.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'userSearch',component:GithubUsersComponent},
  {path:'repoSearch',component:SearchrepoComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
