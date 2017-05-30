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
        this.tweet = {
            heartNumber: 10,
            isHeart: false
        };
        this.post = {
            title: "Title",
            isFavorite: true,
            voteCount: 10,
            myVote: 0
        };
    }
    AppComponent.prototype.onVote = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<messages></messages>\n  <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\" style=\"margin-left:50px\"></favorite>\n  <heart [heartNumber]=\"tweet.heartNumber\" [isHeart]=\"tweet.isHeart\" ></heart> <br/>\n  <vote></vote> <br/>\n  <voter \n  \t[voteCount]=\"post.voteCount\"\n  \t[myVote]=\"post.myVote\"\n  \t(vote)=\"onVote($event)\">\n  </voter>\n  " //using messages component
        //WITH ALIAS:
        //template: '<messages></messages><favorite [is-favorite]="post.isFavorite" style="margin-left:50px"></favorite>'
        //previously we had to use directives to register the component
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map