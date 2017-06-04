"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const home_component_1 = require("./home.component");
const not_found_component_1 = require("./not-found.component");
const posts_component_1 = require("./posts.component");
const users_component_1 = require("./users/users.component");
const add_user_component_1 = require("./users/add-user.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'posts',
        component: posts_component_1.PostsComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: 'users/add',
        component: add_user_component_1.AddUserComponent
    },
    { path: '**', component: not_found_component_1.PageNotFoundComponent } //wild routes
]);
//# sourceMappingURL=app.routing.js.map