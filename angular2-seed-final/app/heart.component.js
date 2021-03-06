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
var HeartComponent = (function () {
    function HeartComponent() {
        this.isHeart = false;
        this.heartNumber = 0;
    }
    HeartComponent.prototype.onClick = function () {
        this.isHeart = !this.isHeart;
        this.heartNumber += this.isHeart ? 1 : -1;
    };
    return HeartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeartComponent.prototype, "isHeart", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HeartComponent.prototype, "heartNumber", void 0);
HeartComponent = __decorate([
    core_1.Component({
        selector: 'heart',
        template: "\n  <i\n    class=\"glyphicon glyphicon-heart\"\n    [style.color]=\"isHeart ? 'deeppink' : '#ccc'\"\n    (click)=\"onClick()\">\n  </i>\n  {{ heartNumber }}\n  ",
        styles: ["\n    .glyphicon-heart {\n      cursor: pointer;\n    }\n  "],
        outputs: ['change:heartChange', 'heartNumber']
    })
], HeartComponent);
exports.HeartComponent = HeartComponent;
//# sourceMappingURL=heart.component.js.map