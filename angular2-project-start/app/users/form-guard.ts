import {CanDeactivate} from '@angular/router';
import { AddUserComponent } from '../users/add-user.component';
import { Injectable } from '@angular/core';

// export interface FormComponent {
// 	form: FormGroup;	//this makes it model drivem i.e. less generic
// 	//hasUnsavedChanges() : Boolean;	//this is a method that returns boolean
// }

@Injectable()
export class FormGuard implements CanDeactivate <AddUserComponent> {//the type we put here will determine the signature of canDeactivate method

	canDeactivate( component : AddUserComponent) {
		//if(component.hasUnsavedChanges())
		if(component.isDirty())
			return confirm("Are you sure you want to navigate away?");
		// else
		// 	return confirm("Didn't work");
		return null;
	}

} 