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
const forms_1 = require("@angular/forms");
const usernameValidators_1 = require("./usernameValidators");
let SignUpFormComponent = class SignUpFormComponent {
    // '' -> default value
    //2nd parameter -> one or more validators
    //3rd parameter -> one or more async. validators
    constructor(fb) {
        this.form = fb.group({
            username: ['',
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    usernameValidators_1.UsernameValidators.cannotContainSpace
                ]),
                usernameValidators_1.UsernameValidators.shouldBeUnique],
            password: ['', forms_1.Validators.required]
        });
    }
    // form = new FormGroup({
    // 	username: new FormControl('', Validators.required),
    // 	password: new FormControl('', Validators.required)
    // }); //property
    signup() {
        //var result = authService.login(this.form.value)
        //result is boolean
        this.form.controls['username'].setErrors({
            invalidLogin: true
        }); //To get access to one of the controls. Like username.
        console.log(this.form.value);
    }
};
SignUpFormComponent = __decorate([
    core_1.Component({
        selector: 'signup-form',
        templateUrl: 'app/signup-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SignUpFormComponent);
exports.SignUpFormComponent = SignUpFormComponent;
//# sourceMappingURL=signup-form.component.js.map