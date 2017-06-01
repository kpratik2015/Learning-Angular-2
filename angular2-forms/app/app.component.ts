import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

  <contact-form></contact-form>

  =========================================== <br/>

  <subscription-form></subscription-form> 

  =========================================== <br/>

  <h2> Complex Validation </h2>

  <signup-form></signup-form> 
    
  `
  

})
export class AppComponent { 

}
