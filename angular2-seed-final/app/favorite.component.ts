import {Component, Input} from '@angular/core';

@Component({
  selector: 'favorite',
  template: `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <i
    class="glyphicon"
    [class.glyphicon-star-empty]="!isFavorite"
    [class.glyphicon-star]="isFavorite"
    (click)="onClick()">
  </i>
  `
  //, inputs : ['isFavorite'] //this is 2nd approach which does not require import and decorator. This is better way.
})

export class FavoriteComponent {
  //isFavorite = false;  //this is private. So we need to make it as input property to expose it to outside
  @Input() isFavorite = false;  //this will be part of public API

  //We can also have alias to not reveal private property's real name
  //@input('is-favorite') isFavorite = false;
  //Other approach:
  //inputs: ['isFavorite:is-favorite']

  onClick() {
    this.isFavorite = !this.isFavorite;  //toggling
  }
}