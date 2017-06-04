import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import { UserService } from './users.service'; //IMPORT SERVICE
import { OnInit } from '@angular/core';	//MUST IMPORT FOR ngOnInit
 
@Component({
    template: `
        <h1>Users</h1>
        <p> <a class="btn btn-primary" routerLink="../users/add">Add Users</a> </p>
        <table class="table table-bordered">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
			</thead>	

			<tr *ngFor="let user of users">
				<td>{{ user.name }}</td>
				<td>{{ user.email }}</td>
				<td><i class="glyphicon glyphicon-edit"></i></td>
				<td><i class="glyphicon glyphicon-remove"></i></td>
			</tr>
        </table>

    `
})
export class UsersComponent implements OnInit {

	users : any[];

	constructor(private _userService: UserService) {	//Angular doesnt know where PostService is.

	}

	ngOnInit() {	//In terms of lifecycle, it is called after the constructor.

		this._userService.getUsers()
			.subscribe(users => {
				this.users = users;
				console.log(users);
			});
	}
    
}