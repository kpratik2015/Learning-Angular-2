import { Component, Input } from '@angular/core';
import { PostService } from './post.service'; //IMPORT SERVICE
import { OnInit } from '@angular/core';	//MUST IMPORT FOR ngOnInit

@Component({
  selector: 'my-app',
  template: `
  
  `,
  providers: [ PostService ]
  

})
export class AppComponent implements OnInit{ //we can add more interfaces according to lifecycle hooks e.g. OnDestroy to do some cleanup. 

	//Behind each class there is injector. We need to register the PostService and any of its dependency.

	constructor(private _postService: PostService) {	//Angular doesnt know where PostService is.
		//this._postService.createPost() //this expects any parameter which is wrong. In Typescript, any is default parameter unless explicitly specified.
		//this._postService.createPost({ userId: 1, title: "a", body: "b"});
	}

	//If we need to call the server we do it in ngOnInit

	ngOnInit() {	//In terms of lifecycle, it is called after the constructor.

		this._postService.getPosts()
		// posts : any. If we do posts[0]. we don't get any suggestions. So we need to do type annotation to getPost method.
			.subscribe(posts => console.log(posts[0].body));
	}

}
