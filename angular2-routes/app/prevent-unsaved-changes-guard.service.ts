import {CanDeactivate} from '@angular/router';
import {MessagesComponent} from './messages/messages.component';
import { FormGroup } from '@angular/forms';

export interface FormComponent {
	form: FormGroup;	//this makes it model drivem i.e. less generic
	//hasUnsavedChanges() : Boolean;	//this is a method that returns boolean
}

export class PreventUnsavedChangesGuard implements CanDeactivate <FormComponent> {//the type we put here will determine the signature of canDeactivate method

	canDeactivate(component : FormComponent) {
		//if(component.hasUnsavedChanges())
		if(component.form.dirty)
			return confirm("Are you sure?");

		return true;
	}

} 