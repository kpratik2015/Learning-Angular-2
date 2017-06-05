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
const router_1 = require("@angular/router");
let AppComponent = class AppComponent {
    constructor(_router) {
        this._router = _router;
    }
    onClick() {
        this._router.navigate(['photos', 2]);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
		<ul>
		    <li><a routerLink="">Home</a></li>
		    <li><a routerLink="photos">Photos</a></li>
		    <li><a routerLink="messages">Messages</a></li>
		    <li><a [routerLink]="['photos', 1]">Photo Details</a></li>
		</ul>

		<button (click)="onClick()"> Click Me! </button>

		<router-outlet></router-outlet>
    ` //since route has parameter of id. We need to use property binding syntax.
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map