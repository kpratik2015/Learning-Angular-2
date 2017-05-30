import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SummaryPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
