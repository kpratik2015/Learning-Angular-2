import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    template: `
        <h1>Home Page</h1>
        <ul>
            <li *ngFor="let archive of archives">
                <a [routerLink]="['Archives', { year: archive.year, month: archive.month }]">
                    {{ archive.year }}/{{ archive.month }}
                </a>
            </li>
        </ul>
    `
})
export class HomeComponent {

    constructor(authService : AuthService) {
        authService.login("username","password");
    }

    archives = [
      { year: 2016, month: 1 },  
      { year: 2016, month: 2 },  
      { year: 2016, month: 3 },  
    ];
}