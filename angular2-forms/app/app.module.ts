import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionFormComponent } from './subscription-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContactFormComponent, SubscriptionFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
