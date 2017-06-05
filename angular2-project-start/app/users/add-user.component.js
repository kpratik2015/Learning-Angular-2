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
const core_2 = require("@angular/core"); //MUST IMPORT FOR ngOnInit
//import { FormFields } from '../users/form-fields';
let AddUserComponent = AddUserComponent_1 = class AddUserComponent {
    // private _router: Router;
    // private _userService : UserService;
    constructor(_fb) {
        this._fb = _fb;
    }
    // form = new FormFields("a","b@s.com","c","d","e","f","g");
    ngOnInit() {
        this.form = this._fb.group({
            "name": ["", forms_1.Validators.required],
            "email": ["", forms_1.Validators.required],
            "phone": [""],
            "address": this._fb.group({
                "street": [""],
                "suite": [""],
                "city": [""],
                "zipcode": [""]
            })
        });
        this.templateForm.valueChanges.subscribe((value) => {
            if (this.templateForm.dirty) {
                console.log('template form dirty - yes: ', value);
                AddUserComponent_1.dirty = true;
            }
            else {
                AddUserComponent_1.dirty = false;
                console.log('template form dirty - no: ');
            }
        });
    }
    isDirty() {
        return AddUserComponent_1.dirty;
    }
    onSubmit(form) {
        console.log(form.value);
    }
};
__decorate([
    core_2.ViewChild('f'),
    __metadata("design:type", Object)
], AddUserComponent.prototype, "templateForm", void 0);
AddUserComponent = AddUserComponent_1 = __decorate([
    core_1.Component({
        selector: 'add-user-form',
        templateUrl: '../app/users/add-user.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
var AddUserComponent_1;
//# sourceMappingURL=add-user.component.js.map