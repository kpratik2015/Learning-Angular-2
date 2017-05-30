"use strict";
//SIMPLE IMPLEMENTATION
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
var VoteComponent = (function () {
    function VoteComponent() {
        this.isVoteUp = false;
        this.isVoteDown = false;
        this.isNeut = false;
        this.voteNumber = 10;
    }
    VoteComponent.prototype.onClickUp = function () {
        this.isVoteDown = false;
        this.isNeut = !this.isNeut;
        this.isVoteUp = true;
        this.voteNumber += 1;
    };
    VoteComponent.prototype.onClickDown = function () {
        this.isVoteUp = false;
        this.isNeut = !this.isNeut;
        this.isVoteDown = true;
        this.voteNumber -= 1;
    };
    return VoteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "isVoteUp", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "isVoteDown", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "isNeut", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "voteNumber", void 0);
VoteComponent = __decorate([
    core_1.Component({
        selector: 'vote',
        template: "\n  <div class=\"vote-system\">\n  <i\n    class=\"glyphicon glyphicon-menu-up\"\n    [class.gold-highlight]=\"isNeut && isVoteUp ? true : false\"\n    (click)=\"isNeut && isVoteUp ? null : onClickUp()\">\n  </i>\n  {{ voteNumber }}\n  <i\n    class=\"glyphicon glyphicon-menu-down\"\n    [class.gold-highlight]=\"isNeut && isVoteDown ? true : false\"\n    (click)=\"isNeut && isVoteDown ? null : onClickDown()\">\n  </i>\n  </div>\n  ",
        styles: ["\n    .vote-system {\n      display: inline-grid;\n      padding: 20px;\n      font-size: 2em;\n    }\n    .gold-highlight {\n      color: gold;\n    }\n  "],
        outputs: ['change:voteChange', 'voteNumber']
    })
], VoteComponent);
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=voting.component.js.map