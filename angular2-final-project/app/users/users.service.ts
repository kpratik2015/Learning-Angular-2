import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
//We need to mark this class as available for dependency injection. So we need injectable annotation
import { Users } from './users';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {

	private _url = "http://jsonplaceholder.typicode.com/users"; //by default members are public

	constructor(private _http: Http){

	}

	getUsers() : Observable<Users[]> {
		return this._http.get(this._url)
			.map(res => res.json()
			);
			//toPromise(); //this can be done. We need to import toPromise. Also, change : Observable<Post []> to : Promise<Post []>. 
	}

}