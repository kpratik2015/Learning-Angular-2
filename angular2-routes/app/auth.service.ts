import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

	isLoggedIn = false;

	login(username, password){
		this.isLoggedIn = true;	//instead of true in real world app u will get the value returned from server
	}

	logout() {

		this.isLoggedIn = false;

	}

}