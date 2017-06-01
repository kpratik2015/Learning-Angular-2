import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl:'app/contact-form.component.html' 
})
export class ContactFormComponent { 
	onSubmit(form) {
		console.log(form);
	}
}
