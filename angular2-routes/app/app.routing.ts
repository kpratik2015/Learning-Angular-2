import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages/messages.component';
import { PageNotFoundComponent } from './not-found.component';
import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([		//const because to make sure that nowhere else we are gonna accidentally modify these routes
	{ path: '', component: HomeComponent},
	{ 
		path: 'messages', 
		component: MessagesComponent,
		canActivate: [ AuthGuard ],	//we can apply multiple routes. If first one returns false then control is passed to next guard.
		canDeactivate: [ PreventUnsavedChangesGuard ]
	},
	{ path: '**', component: PageNotFoundComponent}	//wild routes
]);