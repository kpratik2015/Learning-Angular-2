import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<messages></messages>
  <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)" style="margin-left:50px"></favorite>
  <heart [heartNumber]="tweet.heartNumber" [isHeart]="tweet.isHeart" ></heart> <br/>
  <vote></vote> <br/>
  <voter 
  	[voteCount]="post.voteCount"
  	[myVote]="post.myVote"
  	(vote)="onVote($event)">
  </voter>
  `//using messages component
  //WITH ALIAS:
  //template: '<messages></messages><favorite [is-favorite]="post.isFavorite" style="margin-left:50px"></favorite>'
  
  //previously we had to use directives to register the component
  
})
export class AppComponent { 

	onVote($event) {
		console.log($event);
	}

	tweet = {
		heartNumber: 10,
		isHeart: false
	}

	post = {
		title: "Title",
		isFavorite: true,
		voteCount: 10,
		myVote: 0
	}

	onFavoriteChange($event) {
		console.log($event);
	}

}
