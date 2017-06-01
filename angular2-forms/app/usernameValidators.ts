import { FormControl } from '@angular/forms';

/*

	Validation passes: return null
	Validation fails: return { <validationRule> : <value> }

*/

export class UsernameValidators {
	static cannotContainSpace(control: FormControl) {
		if( control.value.indexOf(' ') >= 0) {
			return { cannotContainSpace: true }
		}

		return null;
	}
}