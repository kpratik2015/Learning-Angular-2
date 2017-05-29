"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessagesService = (function () {
    function MessagesService() {
    }
    //getCourses() : string[] {   //explicitely setting type
    MessagesService.prototype.getMessages = function () {
        return ["m1", "m2", "m3"];
    };
    return MessagesService;
}());
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map