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
const post_service_1 = require("./post.service"); //IMPORT SERVICE
let AppComponent = class AppComponent {
    //Behind each class there is injector. We need to register the PostService and any of its dependency.
    constructor(_postService) {
        this._postService = _postService;
        //this._postService.createPost() //this expects any parameter which is wrong. In Typescript, any is default parameter unless explicitly specified.
        //this._postService.createPost({ userId: 1, title: "a", body: "b"});
    }
    //If we need to call the server we do it in ngOnInit
    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts => console.log(posts[0].body));
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
  
  `,
        providers: [post_service_1.PostService]
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map