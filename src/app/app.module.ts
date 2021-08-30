import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GithubServiceService } from './services/github-request.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';
import { GithubRepositoryComponent } from './components/github-repository/github-repository.component';
import { HomeComponent } from './components/home/home.component';
import { SearchrepoComponent } from './components/searchrepo/searchrepo.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent,
    GithubRepositoryComponent,
    HomeComponent,
    SearchrepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
