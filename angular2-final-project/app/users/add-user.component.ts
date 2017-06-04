import {Component} from '@angular/core';

@Component({
    selector: 'add-user-form',
    templateUrl: '../app/users/add-user.component.html'
})
export class AddUserComponent {
    
    onSubmit(form){
        console.log(form.value);
    }
}