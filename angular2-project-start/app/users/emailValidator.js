"use strict";
//NOT USED
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    static validateEmail(control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (EMAIL_REGEXP.test(control.value)) {
            return { validateEmail: true };
        }
        return null;
    }
}
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=emailValidator.js.map