"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const photos_component_1 = require("./photos.component");
const photo_details_component_1 = require("./photo-details.component");
exports.photosRouting = router_1.RouterModule.forChild([
    { path: 'photos', component: photos_component_1.PhotosComponent },
    { path: 'photos/:id', component: photo_details_component_1.PhotoDetailsComponent },
]);
//# sourceMappingURL=photos.routing.js.map