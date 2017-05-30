import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<messages></messages>
  <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)" style="margin-left:50px"></favorite>
  <heart [heartNumber]="tweet.heartNumber" [isHeart]="tweet.isHeart" ></heart> 
  `//using messages component
  //WITH ALIAS:
  //template: '<messages></messages><favorite [is-favorite]="post.isFavorite" style="margin-left:50px"></favorite>'
  
  //previously we had to use directives to register the component
  
})
export class AppComponent { 

	tweet = {
		heartNumber: 10,
		isHeart: false
	}

	post = {
		title: "Title",
		isFavorite: true
	}

	onFavoriteChange($event) {
		console.log($event);
	}

}
