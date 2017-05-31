import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanel } from './bootstrap.panel.component';
import { ZippyComponent } from './zippy.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SummaryPipe, BootstrapPanel, ZippyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
