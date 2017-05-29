import { Component } from '@angular/core';

import { MessagesService } from './messages.service'  //this is needed

@Component({
	selector: 'messages',
	template: `<h1>Messages</h1>
	<ul>
		<li *ngFor="let m of messages">{{ m }}</li>
	</ul>
	`
	//providers: [ MessagesService ]	//this works in new release but there is a better way. That is, by registering at module level

})

export class MessagesComponent {
	messages;

	constructor(mS : MessagesService) {
		this.messages = mS.getMessages();
	}
}