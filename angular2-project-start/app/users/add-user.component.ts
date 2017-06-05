import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmailValidator } from '../users/emailValidator';
import { OnInit, ViewChild } from '@angular/core';    //MUST IMPORT FOR ngOnInit
//import { FormFields } from '../users/form-fields';

@Component({
    selector: 'add-user-form',
    templateUrl: '../app/users/add-user.component.html'
})


export class AddUserComponent implements OnInit { //the type we put here will determine the signature of canDeactivate method

    form: FormGroup;
    // private _router: Router;
    // private _userService : UserService;

    
    constructor(private _fb: FormBuilder){

    }
    @ViewChild('f') templateForm: any;

    static dirty : boolean;


    // form = new FormFields("a","b@s.com","c","d","e","f","g");

    ngOnInit() {

        this.form = this._fb.group({
            "name": ["", Validators.required], 
            "email": ["", Validators.required],
            "phone": [""],
            "address": this._fb.group({        //To match JSON of typicode website
                "street": [""],
                "suite": [""],
                "city": [""],
                "zipcode": [""]
            })
           
        });



        this.templateForm.valueChanges.subscribe((value: any) => {
        if (this.templateForm.dirty) {
            console.log('template form dirty - yes: ', value);
            AddUserComponent.dirty = true;
        } else {
            AddUserComponent.dirty = false;
            console.log('template form dirty - no: ');
        }
    });

    }

    isDirty(){
        return AddUserComponent.dirty;
    }

    onSubmit(form){
        console.log(form.value);
    }

    // save() {
    //     this._userService.addUser(this.form.value)
    //         .subscribe( x => {
    //             this.form.markAsPristine();
    //             this._router.navigate(['users']);
    //         });
    // }
    
}