import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { routing } from './app.routing';
import { photosRouting } from './photos/photos.routing';

import { HomeComponent } from './home.component';
import { PhotosModule } from './photos/photos.module';
import { PageNotFoundComponent } from './not-found.component';
import { MessagesModule } from './messages/messages.module'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

//!! IMPORT FEATURE MODULE ROUTES BEFORE MAIN ROUTES IN APP.MODULE.TS
//THAT IS, PHOTOS ROUTING MODULE BEFORE ROUTING in Imports !!

@NgModule({
  imports:      [ BrowserModule, PhotosModule, photosRouting, routing, HttpModule, FormsModule, MessagesModule ],
  declarations: [ AppComponent, HomeComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: 	[ AuthService, AuthGuard, PreventUnsavedChangesGuard ]
})
export class AppModule { }
