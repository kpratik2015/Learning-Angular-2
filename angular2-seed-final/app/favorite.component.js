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
var core_1 = require("@angular/core");
var FavoriteComponent = (function () {
    function FavoriteComponent() {
        //isFavorite = false;  //this is private. So we need to make it as input property to expose it to outside
        this.isFavorite = false; //this will be part of public API
        //We can also have alias to not reveal private property's real name
        //@input('is-favorite') isFavorite = false;
        //Other approach:
        //inputs: ['isFavorite:is-favorite']
        this.change = new core_1.EventEmitter(); //shows redline at first so we need to import 
    }
    //Exposing to ouput
    FavoriteComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite; //toggling
        this.change.emit({ newValue: this.isFavorite }); //to publish change event. Pass object to send additional data. 
    };
    return FavoriteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FavoriteComponent.prototype, "isFavorite", void 0);
FavoriteComponent = __decorate([
    core_1.Component({
        selector: 'favorite',
        template: "\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  <i\n    class=\"glyphicon\"\n    [class.glyphicon-star-empty]=\"!isFavorite\"\n    [class.glyphicon-star]=\"isFavorite\"\n    (click)=\"onClick()\">\n  </i>\n  ",
        outputs: ['change:favoriteChange'] //with aliasing
        //, inputs : ['isFavorite'] //this is 2nd approach which does not require import and decorator. This is better way.
    })
], FavoriteComponent);
exports.FavoriteComponent = FavoriteComponent;
//# sourceMappingURL=favorite.component.js.map