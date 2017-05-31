import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div [hidden]="courses.length == 0">
      List of courses
    </div>
    <div *ngIf="courses.length == 0">
      You don't have any courses.
    </div>

    <br/>
    ==================================================
    <br/>

    <ul class="nav nav-pills">
      <li [class.active]="viewMode == 'map'" ><a (click)="viewMode='map'" >Map View</a></li>
      <li [class.active]="viewMode == 'list'" ><a (click)="viewMode='list'" >List View</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
      <template [ngSwitchCase]="'map'" ngSwitchDefault>Map View Content</template>

      <template [ngSwitchCase]="'list'" >List View Content</template>
    </div> 

    <br/>
    ==================================================
    <br/>

    <ul>
      <li *ngFor="let course of courses, let i = index">
        {{ i + 1 }} - {{ course }}
      </li>
    </ul>

    <br/>
    ==================================================
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

    <br />
    ==================================================
    <br/>

    {{ post.title }}
    <br/>
    {{ post.body | summary:10 }}

    <br/>
    ==================================================
    <br/>

    <i
     class="glyphicon"
     [ngClass]="{
       'glyphicon-star-empty': !isFavorite,
       'glyphicon-star': isFavorite
     }"
     (click)="onClick()">
    </i>

    <br/>
    ==================================================
    <br/>

    <button 
      [style.backgroundColor]="canSave ? '#337ab7' : 'gray'"
      [style.color]="canSave ? 'white' : 'black'"
      [style.fontWeight]="canSave ? 'bold' : 'normal'" 
      [ngStyle]="{
        padding: canSave ? '20px' : '2em'
      }"
      > 
      Submit </button>

    <br/>
    ==================================================
    <br/>

    <ul>

      <li>Title: {{ task.title }}</li>
      <li>Assigned to: {{ task.assignee?.name }}

    </ul>

    <br/>
    ==================================================
    <br/>

    


  `  //template is by default part of HTML 5. It stays hidden until activated. If images or scripts are put in template then those also won't be loaded until template is activated.
      /*
      Note: In Angular v4 <template> has been deprecated in favour of <ng-template> and will be removed in v5. In Angular v2.x releases <template> is still valid.
      */
  

})
export class AppComponent { 

  task = {
    title: "Check Apps",
    assignee: null
  }

  canSave = true;

  courses = ['Course1','Course2','Course3'];

  @Input() isFavorite = false;

  onClick() {
    this.isFavorite = !this.isFavorite;  //toggling
  }

  post = {
    title: "Inception Review",
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum ut ex. Sed ullamcorper
      , leo nec maximum vestibulum, aug
      pretium et vitae est.
    `
  }

  movie = {
    title: "Inception",
    rating: 9.9345,
    raters: 59348,
    ticketCost: 220.50,
    releaseDate: new Date(2016, 2, 3)
  }

  viewMode = 'map';
}
