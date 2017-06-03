"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const home_component_1 = require("./home.component");
const messages_component_1 = require("./messages/messages.component");
const not_found_component_1 = require("./not-found.component");
const auth_guard_service_1 = require("./auth-guard.service");
const prevent_unsaved_changes_guard_service_1 = require("./prevent-unsaved-changes-guard.service");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'messages',
        component: messages_component_1.MessagesComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    { path: '**', component: not_found_component_1.PageNotFoundComponent } //wild routes
]);
//# sourceMappingURL=app.routing.js.map