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
const passwordValidators_1 = require("./passwordValidators");
let ChangePasswordFormComponent = class ChangePasswordFormComponent {
    constructor(fb) {
        this.form = fb.group({
            oldPassword: ['', forms_1.Validators.required],
            newPassword: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    passwordValidators_1.PasswordValidators.complexPassword
                ])],
            // Note that here is no need to apply complexPassword validator
            // to confirm password field. It's sufficient to apply it only to
            // new password field. Next, passwordsShouldMatch validator
            // will compare confirm password with new password and this will
            // implicitly enforce that confirm password should match complexity
            // rules. 
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: passwordValidators_1.PasswordValidators.passwordsShouldMatch });
    }
    changePassword() {
        // Validating the oldPassword on submit. In a real-world application
        // here, we'll use a service to call the server. The server would
        // tell us that the old password does not match. 
        var oldPassword = this.form.controls['oldPassword'];
        if (oldPassword.value != '1234')
            oldPassword.setErrors({ validOldPassword: true });
        if (this.form.valid)
            alert("Password successfully changed.");
    }
};
ChangePasswordFormComponent = __decorate([
    core_1.Component({
        selector: 'change-password-form',
        templateUrl: 'app/change-password-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ChangePasswordFormComponent);
exports.ChangePasswordFormComponent = ChangePasswordFormComponent;
//# sourceMappingURL=change-password-form.component.js.map