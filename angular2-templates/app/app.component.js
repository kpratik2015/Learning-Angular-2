"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.courses = ['Course1', 'Course2', 'Course3'];
        this.movie = {
            title: "Inception",
            rating: 9.9345,
            raters: 59348,
            ticketCost: 220.50,
            releaseDate: new Date(2016, 2, 3)
        };
        this.viewMode = 'map';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div [hidden]=\"courses.length == 0\">\n      List of courses\n    </div>\n    <div *ngIf=\"courses.length == 0\">\n      You don't have any courses.\n    </div> <br/>\n\n    <ul class=\"nav nav-pills\">\n      <li [class.active]=\"viewMode == 'map'\" ><a (click)=\"viewMode='map'\" >Map View</a></li>\n      <li [class.active]=\"viewMode == 'list'\" ><a (click)=\"viewMode='list'\" >List View</a></li>\n    </ul>\n    <div [ngSwitch]=\"viewMode\">\n      <template [ngSwitchCase]=\"'map'\" ngSwitchDefault>Map View Content</template>\n\n      <template [ngSwitchCase]=\"'list'\" >List View Content</template>\n    </div> <br/>\n\n    <ul>\n      <li *ngFor=\"let course of courses, let i = index\">\n        {{ i + 1 }} - {{ course }}\n      </li>\n    </ul>\n    <br/>\n    {{ movie.title | uppercase | lowercase }}\n    <br/>\n    {{ movie.rating | number:'2.2-2' }}\n    <br/>\n    {{ movie.raters | number }}\n    <br/>\n    {{ movie.ticketCost | currency:'INR':true:'3.2-2' }}\n    <br/>\n    {{ movie.releaseDate | date:'MMM yyyy'}}\n    <br/>\n    {{ movie | json }}\n  " //template is by default part of HTML 5. It stays hidden until activated. If images or scripts are put in template then those also won't be loaded until template is activated.
        /*
        Note: In Angular v4 <template> has been deprecated in favour of <ng-template> and will be removed in v5. In Angular v2.x releases <template> is still valid.
        */
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map