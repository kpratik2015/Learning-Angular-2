System.register(['@angular/core', './post.service', '../users/user.service', 'underscore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, user_service_1, _;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            let PostsComponent = class PostsComponent {
                constructor(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.users = [];
                    this.pageSize = 10;
                }
                ngOnInit() {
                    this.loadUsers();
                    this.loadPosts();
                }
                loadUsers() {
                    this._userService.getUsers()
                        .subscribe(users => this.users = users);
                }
                loadPosts(filter) {
                    this.postsLoading = true;
                    this._postService.getPosts(filter)
                        .subscribe(posts => {
                        this.posts = posts;
                        this.pagedPosts = _.take(this.posts, this.pageSize);
                    }, null, () => { this.postsLoading = false; });
                }
                reloadPosts(filter) {
                    this.currentPost = null;
                    this.loadPosts(filter);
                }
                select(post) {
                    this.currentPost = post;
                    this.commentsLoading = true;
                    this._postService.getComments(post.id)
                        .subscribe(comments => this.currentPost.comments = comments, null, () => this.commentsLoading = false);
                }
                onPageChanged(page) {
                    var startIndex = (page - 1) * this.pageSize;
                    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
                }
            };
            PostsComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/posts/posts.component.html',
                    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `]
                }), 
                __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
            ], PostsComponent);
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map