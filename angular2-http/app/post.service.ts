import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
//We need to mark this class as available for dependency injection. So we need injectable annotation
import {Post} from './post';
import { Observable } from 'rxjs/observable';

@Injectable()
export class PostService {

	private _url = "http://jsonplaceholder.typicode.com/posts"; //by default members are public

	constructor(private _http: Http){

	}

	getPosts() : Observable<Post[]> {
		return this._http.get(this._url)
			.map(res => res.json());
			//toPromise(); //this can be done. We need to import toPromise. Also, change : Observable<Post []> to : Promise<Post []>. 
	}

	createPost(post: Post) {
		return this._http.post(this._url, JSON.stringify(post))
			.map(res => res.json());
	}

	//Other methods of HTTP like put or delete are exactly the same.
}