//NOT USED

import { FormControl } from '@angular/forms';

export class EmailValidator {

	static validateEmail(control: FormControl) {
	var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

	  if (EMAIL_REGEXP.test(control.value)) {
	    return {validateEmail: true};
	  }
	  return null;
	}
}