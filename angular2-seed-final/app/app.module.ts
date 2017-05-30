import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MessagesComponent } from './messages.component';
import { MessagesService } from './messages.service';
import { FavoriteComponent } from './favorite.component';
import { HeartComponent } from './heart.component';
import { VoteComponent } from './voting.component';
import { VoterComponent } from './voter.component';
import { TweetComponent } from './tweet.component';
import { TweetService } from './tweet.service';
import { LikeComponent } from './like.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MessagesComponent, FavoriteComponent, HeartComponent, VoteComponent, VoterComponent, TweetComponent, LikeComponent ],
  bootstrap:    [ AppComponent ],
  providers: 	[ MessagesService, TweetService ]
})
export class AppModule { }
