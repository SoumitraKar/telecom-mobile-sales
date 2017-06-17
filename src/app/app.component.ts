import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} <app-leftpanel></app-leftpanel> </h1>`,
})
export class AppComponent  { name = 'Angular'; }
