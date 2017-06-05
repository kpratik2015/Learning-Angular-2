"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const navbar_component_1 = require("./navbar.component");
const forms_1 = require("@angular/forms");
const home_component_1 = require("./home.component");
const not_found_component_1 = require("./not-found.component");
const posts_component_1 = require("./posts.component");
const users_component_1 = require("./users/users.component");
const app_routing_1 = require("./app.routing");
const http_1 = require("@angular/http");
const users_service_1 = require("./users/users.service");
const add_user_component_1 = require("./users/add-user.component");
const form_guard_1 = require("./users/form-guard");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_1.routing,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavBarComponent,
            home_component_1.HomeComponent,
            not_found_component_1.PageNotFoundComponent,
            posts_component_1.PostsComponent,
            users_component_1.UsersComponent,
            add_user_component_1.AddUserComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [
            users_service_1.UserService,
            form_guard_1.FormGuard
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map