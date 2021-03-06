"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let SubscriptionFormComponent = class SubscriptionFormComponent {
    constructor() {
        this.frequencies = [
            { id: 1, label: 'Daily' },
            { id: 2, label: 'Weekly' },
            { id: 3, label: 'Monthly' }
        ];
    }
    onSubscribe(form) {
        console.log(form.value);
    }
};
SubscriptionFormComponent = __decorate([
    core_1.Component({
        selector: 'subscription-form',
        templateUrl: 'app/subscription-form.component.html'
    })
], SubscriptionFormComponent);
exports.SubscriptionFormComponent = SubscriptionFormComponent;
//# sourceMappingURL=subscription-form.component.js.map