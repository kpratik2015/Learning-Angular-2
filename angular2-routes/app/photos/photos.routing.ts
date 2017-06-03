import { Router, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './photo-details.component';

export const photosRouting = RouterModule.forChild([		//const because to make sure that nowhere else we are gonna accidentally modify these routes
	{ path: 'photos', component: PhotosComponent },
	{ path: 'photos/:id', component: PhotoDetailsComponent },
]);