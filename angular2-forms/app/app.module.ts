import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionFormComponent } from './subscription-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpFormComponent } from './signup-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ContactFormComponent, SubscriptionFormComponent, SignUpFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
