import {Component, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: 'app/favorite.template.html', //this adds an extra HTTP request. So if code of template is small then inline it. The extra template will be downloaded only once and then it will be cached
  outputs: ['change:favoriteChange'] //with aliasing
  //, inputs : ['isFavorite'] //this is 2nd approach which does not require import and decorator. This is better way.

})

export class FavoriteComponent {
  //isFavorite = false;  //this is private. So we need to make it as input property to expose it to outside
  @Input() isFavorite = false;  //this will be part of public API

  //We can also have alias to not reveal private property's real name
  //@input('is-favorite') isFavorite = false;
  //Other approach:
  //inputs: ['isFavorite:is-favorite']

  change = new EventEmitter(); //shows redline at first so we need to import 

  //Exposing to ouput


  

  onClick() {
    this.isFavorite = !this.isFavorite;  //toggling
    this.change.emit({ newValue : this.isFavorite }); //to publish change event. Pass object to send additional data. 
  }
}