import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/observable/fromPromise';
// import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'my-app',
  template: `
    <input id="search" type="text" class="form-control" placeholder="Search"> 

    ===================================================

    <h2>Angular Way</h2>

    <form
		[formGroup]="form">
		<input
			type="text"
			formControlName="search">
	</form>
  `
  

})
export class AppComponent { 

	form: FormGroup;

	ngAfterViewInit(){
		var keyups = Observable
		.fromEvent($("#search"), "keyup")
		.map(e => e.target.value)
		.filter(text => text.length >= 3)
		.debounceTime(400)
		.distinctUntilChanged()
		.flatMap(searchTerm => {
			var url = "https://api.spotify.com/v1/search?type=artist&q=" +searchTerm;
			//AJAX call:
			var promise = $.getJSON(url);
			return Observable.fromPromise(promise);
	});

		//Verbose:
		//keyups.subscribe(function(data){
			//console.log(data);
		//});

		keyups.subscribe(data => console.log(data));

		var search = this.form.controls['search'];

		search.valueChanges
			.debounceTime(400)
			.map(str => (<string> str).replace(' ', '-'))
			.subscribe(x => console.log(x));

		//var subscription = keyups.subscribe(data => console.log(data));
		//subscription.unsubscribe();


	}

	constructor(fb:FormBuilder){

		console.log(new Observable());  //for seeing how much code is imported. 

		this.form = fb.group({
			search: []
		});

		var startDates = [];
		var startDate = new Date();

		for( var day = -2 ; day <= 2 ; day++ ) {
			var date = new Date(
				startDate.getFullYear(),
				startDate.getMonth(),
				startDate.getDate() + day);
			startDates.push(date);

		}

		Observable
			.from(startDates)
			//.map( date => console.log("Getting deals for date " + date)) //gives undefined after each call as we are not returning any values to subscribers
			.map( date => {
				console.log("Getting deals for date " + date);
				return [1,2,3];	//this simulates flight deals returned from server for given date.
			})
			.subscribe(x => console.log(x));

		//Other way of creating observable

		Observable.of(1);
		Observable.of(1,2,3); //an observable with 3 items 
		Observable.empty()
		// Observable.range(1,5)
		// Observable.from([1,2,3])
		// Observable.of([1,2,3])

		// We can use the static Observable.interval() method to create a timer. This is useful for
		// running an asynchronous operation at specified intervals.


		var observable = Observable.interval(5000);
		observable
			.flatMap(x => {
				console.log("calling the server to get the latest news");
				return Observable.of([1,2,3]);
			})
			.subscribe( news => console.log(news));

		//We can use the forkJoin operator to run all observables in parallel and collect their last elements.

		var userStream = Observable.of({
				userId: 1, username: 'pratik'
		}).delay(2000);

		var tweetsStream = Observable.of([1,2,3]).delay(1500);

		Observable
			.forkJoin(userStream, tweetsStream)
			//forkJoin returns an array of data elements collected from multiple observables
			.map(joined => new Object({user: joined[0], tweets: joined[1]}))
			.subscribe(result => console.log(result));

		//SIMULATING A FAILED AJAX CALL

		var observable1 = Observable.throw(new Error("Something failed."));

		observable1.subscribe(
			x => console.log(x),
			error => console.error(error)
		);

		//We can retry a failed observable using the retry operator.

		observable1.retry(2);

		//Simulate an AJAX call that fails twice and succeeds the third time.

		var counter = 0;

		var ajaxCall = Observable.of('url')
			.flatMap( () => {
				if(++counter < 2)
					return Observable.throw(new Error("Request failed"));

				return Observable.of([9,8,7]);
		});

		//In Angular, we have a class called Http, which we use for making AJAX calls.
		//All methods of the Http class return an observable.

		ajaxCall
			.retry(3)	//no error as it works the third time due to counter
			.subscribe(
				x => console.log(x),
				error => console.error(error)
		);


		var remoteDataStream = Observable.throw( new Error(" Something ain't right."));

		//the catch operator is only called if the first observable fails.

		remoteDataStream
			.catch( err => {
				var localDataStream = Observable.of([5,6,7]);
				return localDataStream;
			})
			.subscribe(x => console.log(x));


		//We can also set a timeout so that user dsnt keeps on waiting.

		var longRunningStream = Observable.of([1,2,3]).delay(5000);

		longRunningStream
			.timeout(1000)
			.subscribe(
				x => console.log(x),
				error => console.error(error)
			);


		//Getting notified when observable completes.

		var observable3 = Observable.from([11,22,33]);

		observable3
			.take(3)
			.subscribe(
				x => console.log(x),
				error => console.log(error),
				() => console.log("COMPLETED")
			);

		Observable.from([55,66,77])
			.flatMap( x => Observable.of(['a','b','c']))
			.subscribe( x => console.log(x));



/*		
		//TRADITIONAL JQUERRY WAY:

		var debounced = _.debounce(function(text){

			var url = "https://api.spotify.com/v1/search?type=artist&q=" +text;
			//AJAX call:
			$.getJSON(url, function(artists){
				console.log(artists);
			})

		},400);	

		$("#search").keyup(function(e){
			var text = e.target.value;

			if (text.length < 3)
				return;

			debounced(text);
			
		});
	
*/
	}

}
