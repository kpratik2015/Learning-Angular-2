import {Component, Input} from '@angular/core';

@Component({
  selector: 'heart',
  template: `
  <i
    class="glyphicon glyphicon-heart"
    [style.color]="isHeart ? 'deeppink' : '#ccc'"
    (click)="onClick()">
  </i>
  {{ heartNumber }}
  `,
  styles: [`
    .glyphicon-heart {
      cursor: pointer;
    }
  `], 
  outputs: ['change:heartChange','heartNumber']
})

export class HeartComponent {
  
  @Input() isHeart = false; 

  @Input() heartNumber = 0;


  onClick() {
    this.isHeart = !this.isHeart;
    this.heartNumber += this.isHeart ? 1 : -1;
  }
}