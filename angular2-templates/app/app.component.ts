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
      <template *ngSwitchCase="'map'" ngSwitchDefault>Map View Content</template>

      <template *ngSwitchCase="'list'" >List View Content</template>
    </div>
  `  //template is by default part of HTML 5. It stays hidden until activated. If images or scripts are put in template then those also won't be loaded until template is activated.
})
export class AppComponent { 
  courses = [];

  viewMode = 'map';
}
