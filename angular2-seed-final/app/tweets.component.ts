import {Component} from '@angular/core'
import {TweetService} from './tweet.service'
import {TweetComponent} from './tweet.component'

@Component({
    selector: 'tweets',
    template: `
        <div *ngFor="let tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `
})
export class TweetsComponent {
    tweets: any[];
    
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
} 