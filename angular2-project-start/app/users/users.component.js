"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const users_service_1 = require("./users.service"); //IMPORT SERVICE
let UsersComponent = class UsersComponent {
    constructor(_userService) {
        this._userService = _userService;
    }
    ngOnInit() {
        this._userService.getUsers()
            .subscribe(users => {
            this.users = users;
            //console.log(users);
        });
    }
};
UsersComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map