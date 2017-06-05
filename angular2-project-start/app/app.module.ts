import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NavBarComponent } from './navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './not-found.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users/users.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { UserService } from './users/users.service';
import { AddUserComponent } from './users/add-user.component';
import { FormGuard } from './users/form-guard';

@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule, 
  	ReactiveFormsModule,
  	routing,
  	HttpModule 
  	],

  declarations: [ 
  	AppComponent ,
  	NavBarComponent,
  	HomeComponent,
  	PageNotFoundComponent,
  	PostsComponent,
  	UsersComponent,
  	AddUserComponent
  ],
  bootstrap:    [ 
  	AppComponent 
  ],
  providers: [
  	UserService,
    FormGuard
  ]

})
export class AppModule { }
