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
const app_routing_1 = require("./app.routing");
const photos_routing_1 = require("./photos/photos.routing");
const home_component_1 = require("./home.component");
const photos_module_1 = require("./photos/photos.module");
const not_found_component_1 = require("./not-found.component");
const messages_module_1 = require("./messages/messages.module");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const auth_service_1 = require("./auth.service");
const auth_guard_service_1 = require("./auth-guard.service");
const prevent_unsaved_changes_guard_service_1 = require("./prevent-unsaved-changes-guard.service");
//!! IMPORT FEATURE MODULE ROUTES BEFORE MAIN ROUTES IN APP.MODULE.TS
//THAT IS, PHOTOS ROUTING MODULE BEFORE ROUTING in Imports !!
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, photos_module_1.PhotosModule, photos_routing_1.photosRouting, app_routing_1.routing, http_1.HttpModule, forms_1.FormsModule, messages_module_1.MessagesModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, not_found_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [auth_service_1.AuthService, auth_guard_service_1.AuthGuard, prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map