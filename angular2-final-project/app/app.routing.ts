import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './not-found.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user.component';

export const routing = RouterModule.forRoot([		//const because to make sure that nowhere else we are gonna accidentally modify these routes
	{ path: '', component: HomeComponent},
	{ 
		path: 'posts', 
		component: PostsComponent
	},
	{ 
		path: 'users', 
		component: UsersComponent
	},
	{ 
		path: 'users/add', 
		component: AddUserComponent
	},
	{ path: '**', component: PageNotFoundComponent}	//wild routes
]);