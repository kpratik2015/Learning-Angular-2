import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MessagesComponent } from './messages.component';
import { MessagesService } from './messages.service';
import { FavoriteComponent } from './favorite.component';
import { HeartComponent } from './heart.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MessagesComponent, FavoriteComponent, HeartComponent ],
  bootstrap:    [ AppComponent ],
  providers: 	[ MessagesService ]
})
export class AppModule { }
