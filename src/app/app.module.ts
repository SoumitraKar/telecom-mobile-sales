import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { LeftPanelComponent }  from './leftpanel/leftpanel.component';

@NgModule({
  declarations: [ AppComponent, LeftPanelComponent ],
  imports:      [ BrowserModule, NgbModule.forRoot()],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
