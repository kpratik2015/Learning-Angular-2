"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PreventUnsavedChangesGuard {
    canDeactivate(component) {
        //if(component.hasUnsavedChanges())
        if (component.form.dirty)
            return confirm("Are you sure?");
        return true;
    }
}
exports.PreventUnsavedChangesGuard = PreventUnsavedChangesGuard;
//# sourceMappingURL=prevent-unsaved-changes-guard.service.js.map