import { Component } from '@angular/core';
import { MessagesService } from './messages.service'; 
import { FormComponent } from '../prevent-unsaved-changes-guard.service'; //from root folder
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'messages',
    template: `<h1>Messages</h1>
    <input [(ngModel)]="title">
    <ul>
        <li *ngFor="let m of messages">{{ m }}</li>
    </ul>
    `
})
export class MessagesComponent implements FormComponent {
    messages;
    title = "New Message";
    form: FormGroup;

    constructor(service : MessagesService) {
        this.messages = service.getMessages();
    }
}