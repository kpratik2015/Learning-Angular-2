//SIMPLE IMPLEMENTATION

import {Component, Input} from '@angular/core';

@Component({
  selector: 'vote',
  template: `
  <div class="vote-system">
  <i
    class="glyphicon glyphicon-menu-up"
    [class.gold-highlight]="isNeut && isVoteUp ? true : false"
    (click)="isNeut && isVoteUp ? null : onClickUp()">
  </i>
  {{ voteNumber }}
  <i
    class="glyphicon glyphicon-menu-down"
    [class.gold-highlight]="isNeut && isVoteDown ? true : false"
    (click)="isNeut && isVoteDown ? null : onClickDown()">
  </i>
  </div>
  `,
  styles: [`
    .vote-system {
      display: inline-grid;
      padding: 20px;
      font-size: 2em;
    }
    .gold-highlight {
      color: gold;
    }
  `], 
  outputs: ['change:voteChange','voteNumber']
})

export class VoteComponent {
  
  @Input() isVoteUp = false;
  @Input() isVoteDown = false; 
  @Input() isNeut = false;
  @Input() voteNumber = 10;


  onClickUp() {
    this.isVoteDown = false;
    this.isNeut = !this.isNeut;
    this.isVoteUp = true;
    this.voteNumber += 1;
  }

  onClickDown() {
    this.isVoteUp = false;
    this.isNeut = !this.isNeut;
    this.isVoteDown = true;
    this.voteNumber -= 1;
  }
}