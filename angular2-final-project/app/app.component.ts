import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  	<navbar></navbar>
	<div class="container">
		<router-outlet></router-outlet>
	</div>
  `
  //router-outlet loads the content of our routes
})
export class AppComponent { 

	constructor(private _router : Router) {


	}

}
