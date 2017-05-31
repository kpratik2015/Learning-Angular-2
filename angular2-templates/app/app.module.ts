import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanel } from './bootstrap.panel.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SummaryPipe, BootstrapPanel ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
