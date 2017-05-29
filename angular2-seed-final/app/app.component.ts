import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<messages></messages><favorite [isFavorite]="post.isFavorite" style="margin-left:50px"></favorite>' //using messages component
  //WITH ALIAS:
  //template: '<messages></messages><favorite [is-favorite]="post.isFavorite" style="margin-left:50px"></favorite>'
  
  //previously we had to use directives to register the component
  
})
export class AppComponent { 

	post = {
		title: "Title",
		isFavorite: true
	}

}
