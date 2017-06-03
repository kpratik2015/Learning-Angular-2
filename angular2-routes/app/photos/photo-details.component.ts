
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    template: `<h1>Photo Details {{ id }}</h1>
    `
})
export class PhotoDetailsComponent implements OnInit, OnDestroy{

	id;
	subscription;

	constructor(private _route: ActivatedRoute) {

	}

	ngOnInit() {
		this.subscription = this._route.params.subscribe(params => {
			this.id = +params["id"];	//if you want numeric value then put +
		});	//it is an observable. Route parameters can change so observable.
		

		// this.id = this._route.snapshot.params["id"];	//content of page is not updated. Because ngOnInit is called only once. The route is updated but the ID isnt.
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}


}