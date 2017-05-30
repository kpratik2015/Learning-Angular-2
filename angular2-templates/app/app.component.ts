import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div [hidden]="courses.length == 0">
      List of courses
    </div>
    <div *ngIf="courses.length == 0">
      You don't have any courses.
    </div> <br/>

    <ul class="nav nav-pills">
      <li [class.active]="viewMode == 'map'" ><a (click)="viewMode='map'" >Map View</a></li>
      <li [class.active]="viewMode == 'list'" ><a (click)="viewMode='list'" >List View</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
      <template [ngSwitchCase]="'map'" ngSwitchDefault>Map View Content</template>

      <template [ngSwitchCase]="'list'" >List View Content</template>
    </div> <br/>

    <ul>
      <li *ngFor="let course of courses, let i = index">
        {{ i + 1 }} - {{ course }}
      </li>
    </ul>
    <br/>
    {{ movie.title | uppercase | lowercase }}
    <br/>
    {{ movie.rating | number:'2.2-2' }}
    <br/>
    {{ movie.raters | number }}
    <br/>
    {{ movie.ticketCost | currency:'INR':true:'3.2-2' }}
    <br/>
    {{ movie.releaseDate | date:'MMM yyyy'}}
    <br/>
    {{ movie | json }}
  `  //template is by default part of HTML 5. It stays hidden until activated. If images or scripts are put in template then those also won't be loaded until template is activated.
      /*
      Note: In Angular v4 <template> has been deprecated in favour of <ng-template> and will be removed in v5. In Angular v2.x releases <template> is still valid.
      */

})
export class AppComponent { 
  courses = ['Course1','Course2','Course3'];

  movie = {
    title: "Inception",
    rating: 9.9345,
    raters: 59348,
    ticketCost: 220.50,
    releaseDate: new Date(2016, 2, 3)
  }

  viewMode = 'map';
}
