"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Rx_1 = require("rxjs/Rx");
let AppComponent = class AppComponent {
    constructor() {
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
    ngAfterViewInit() {
        var keyups = Rx_1.Observable.fromEvent($("#search"), "keyup")
            .map(e => e.target.value);
        //Verbose:
        //keyups.subscribe(function(data){
        //console.log(data);
        //});
        keyups.subscribe(data => console.log(data));
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
    <input id="search" type="text" class="form-control" placeholder="Search"> 
  `
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map