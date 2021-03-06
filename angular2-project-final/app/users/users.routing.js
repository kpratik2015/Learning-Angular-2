System.register(['@angular/router', './user-form.component', './users.component', '../prevent-unsaved-changes-guard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, user_form_component_1, users_component_1, prevent_unsaved_changes_guard_service_1;
    var usersRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (prevent_unsaved_changes_guard_service_1_1) {
                prevent_unsaved_changes_guard_service_1 = prevent_unsaved_changes_guard_service_1_1;
            }],
        execute: function() {
            exports_1("usersRouting", usersRouting = router_1.RouterModule.forChild([
                {
                    path: 'users/:id',
                    component: user_form_component_1.UserFormComponent,
                    canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
                },
                {
                    path: 'users/new',
                    component: user_form_component_1.UserFormComponent,
                    canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
                },
                { path: 'users', component: users_component_1.UsersComponent },
            ]));
        }
    }
});
//# sourceMappingURL=users.routing.js.map