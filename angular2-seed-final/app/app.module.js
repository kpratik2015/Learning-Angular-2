"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var messages_component_1 = require("./messages.component");
var messages_service_1 = require("./messages.service");
var favorite_component_1 = require("./favorite.component");
var heart_component_1 = require("./heart.component");
var voting_component_1 = require("./voting.component");
var voter_component_1 = require("./voter.component");
var tweet_component_1 = require("./tweet.component");
var tweet_service_1 = require("./tweet.service");
var like_component_1 = require("./like.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, messages_component_1.MessagesComponent, favorite_component_1.FavoriteComponent, heart_component_1.HeartComponent, voting_component_1.VoteComponent, voter_component_1.VoterComponent, tweet_component_1.TweetComponent, like_component_1.LikeComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [messages_service_1.MessagesService, tweet_service_1.TweetService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map