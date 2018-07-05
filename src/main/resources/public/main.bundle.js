webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" style=\"margin-top: 70px\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styleUrls: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_github_github_component__ = __webpack_require__("../../../../../src/app/components/github/github.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_newgame_newgame_component__ = __webpack_require__("../../../../../src/app/components/newgame/newgame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_game_game_component__ = __webpack_require__("../../../../../src/app/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_github_github_component__["a" /* GitHubComponent */] },
    { path: 'newgame', component: __WEBPACK_IMPORTED_MODULE_9__components_newgame_newgame_component__["a" /* NewgameComponent */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_10__components_game_game_component__["a" /* GameComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__["a" /* UsersComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_github_github_component__["a" /* GitHubComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_newgame_newgame_component__["a" /* NewgameComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_game_game_component__["a" /* GameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_github_service__["a" /* GHService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/game/framegroup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameGroup; });
/* unused harmony export FrameTemplate */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FrameTemplate = /** @class */ (function () {
    function FrameTemplate() {
    }
    return FrameTemplate;
}());
var OptionTemplate = /** @class */ (function () {
    function OptionTemplate() {
    }
    return OptionTemplate;
}());
var FrameGroup = /** @class */ (function (_super) {
    __extends(FrameGroup, _super);
    function FrameGroup(template, parent) {
        var _this = _super.call(this) || this;
        if (parent) {
            _this.charId = parent.charId;
            _this.displayName = parent.displayName;
        }
        if (template) {
            Object.assign(_this, template);
        }
        return _this;
    }
    FrameGroup.mkframes = function (data) {
        var result = this.buildFrames(data);
        return result;
    };
    FrameGroup.buildFrames = function (data, parent, aResult) {
        var _this = this;
        var current;
        var result = aResult ? aResult : [];
        data.forEach(function (frame) {
            var currentFrame = new FrameGroup(frame, parent);
            if (frame.text) {
                current = currentFrame;
                if (result.length > 0) {
                    var latest = result[result.length - 1];
                    latest.nextFrame = current;
                    current.prevFrame = latest;
                }
                if (frame.options) {
                    currentFrame.next = function (option) {
                        currentFrame.children = currentFrame.options.filter(function (o) { return o === option; })[0].children;
                        var tree = _this.buildFrames(currentFrame.children, currentFrame);
                        tree[0].prevFrame = currentFrame;
                        tree[tree.length - 1].nextFrame = currentFrame.nextFrame;
                        return tree[0];
                    };
                }
                result.push(current);
            }
            else {
                current = undefined;
            }
            if (frame.children) {
                _this.buildFrames(frame.children, currentFrame, result);
            }
        });
        return result;
    };
    FrameGroup.mkchars = function (data) {
        var result = [];
        data.forEach(function (frame) {
            if (frame.text) {
                var sthg = frame.text.replace(/a/, '');
                var chg = new CharGroup();
                chg.text = sthg;
                result.push(chg);
            }
        });
        return result;
    };
    FrameGroup.prototype.hasNext = function () {
        return !!this.options || !!this.nextFrame;
    };
    FrameGroup.prototype.next = function (option) {
        return this.nextFrame;
    };
    FrameGroup.prototype.prev = function () {
        return this.prevFrame;
    };
    return FrameGroup;
}(FrameTemplate));
var CharGroup = /** @class */ (function () {
    function CharGroup() {
        this.text = '';
    }
    return CharGroup;
}());



/***/ }),

/***/ "../../../../../src/app/components/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\n    background-color: rgba(16, 16, 16, .75);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    display: none;\n    animation-name: deinani;\n    animation-duration: 1s;\n}\n.bgimg {\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/MplsNicollet.png")) + ") no-repeat center fixed;\n    background-size: cover;\n    \n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    min-height: 100%;\n    z-index: -1;\n    overflow-x: auto;\n}\n.txtbox {\n    position: absolute;\n    top: 70%;\n    width: 70%;\n    min-width: 460px;\n    height: 30%;\n    padding: 16px;\n    color: white;\n    background: rgba(0, 0, 16, .75);\n    z-index: 2;\n}\n.txtarea {\n    margin: 6px;\n    font-size: 14pt;\n}\n.img1 {\n    position: absolute;\n    animation-name: meinani;\n    animation-duration: 2s;\n    /*animation-fill-mode: forwards;*/\n}\n\n@keyframes meinani {\n    0% {\n        transform: translateX(-400px);\n    }\n}\n\n@keyframes deinani {\n    0% {\n        background-color: rgba(240, 0, 16, .70)\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"img0_0\" class=\"overlay\"></div>\n<div class=\"bgimg\">\n</div>\n<div id=\"img1_0\" class=\"img1\">\n  <img src=\"assets/KicchiriProd.jpg\" (click)=\"next()\">\n</div>\n<div id=\"txtbox\" class=\"txtbox\" *ngIf=\"txtbox.visible\">\n  <label class=\"txtarea\">{{ speaker }}</label>\n  <button type=\"button\" class=\"btn btn-danger float-right\" (click)=\"end()\"  *ngIf=\"!this.current.hasNext()\">End</button>\n  <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"next()\" [disabled]=\"noNext()\">Next</button>\n  <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"prev()\" *ngIf=\"current.prevFrame\">Prev</button>\n  <label class=\"txtarea\" style=\"display: block\" *ngFor=\"let content of textContent.split('\\n')\">{{ content }}</label>\n  <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"next(opt)\" *ngFor=\"let opt of current.options\">{{ opt.label }}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_english__ = __webpack_require__("../../../../../src/app/i18n/english.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__framegroup__ = __webpack_require__("../../../../../src/app/components/game/framegroup.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { English2 } from '../../i18n/english2';

var GameComponent = /** @class */ (function () {
    function GameComponent() {
        this.username = localStorage.getItem('username');
        this.lang = new __WEBPACK_IMPORTED_MODULE_1__i18n_english__["a" /* English */]();
        this.textContent = '';
        this.speaker = '';
        this.txtbox = {
            visible: true
        };
        this.ended = false;
        this.charIds = {
            kitsu_chiri: {
                displayName: 'Kitsu-san',
            },
            fuura_kafuka: {
                displayName: 'Fuura-san'
            }
        };
        this.players = {
            p1: {
                getName: function () { return localStorage.getItem('username'); }
            }
        };
        // this.lang2 = new English2(this.charIds, this.players);
        // this.chapter = FrameGroup.mkframes(this.lang.ch1);
        // this.current = this.chapter[0];
    }
    GameComponent.prototype.ngOnInit = function () {
        localStorage.setItem('global.navbar', 'false');
        var newGame = JSON.parse(localStorage.getItem('global.newgame')) || this.lang.ch2;
        this.chapter = __WEBPACK_IMPORTED_MODULE_2__framegroup__["a" /* FrameGroup */].mkframes(newGame);
        this.current = this.chapter[0];
        this.setText();
    };
    GameComponent.prototype.noNext = function () {
        return this.current.options !== undefined || !this.current.hasNext();
    };
    GameComponent.prototype.next = function (option) {
        if (this.current.hasNext())
            this.current = this.current.next(option);
        this.setText();
    };
    GameComponent.prototype.prev = function () {
        this.current = this.current.prev();
        this.setText();
        document.getElementById('img0_0').style.display = 'none';
        //document.getElementById('img1_0').style.display = 'initial';
    };
    GameComponent.prototype.end = function () {
        if (!this.ended) {
            document.getElementById('img0_0').style.display = 'grid';
            //document.getElementById('img1_0').style.display = 'none';
            var hackFrame = new __WEBPACK_IMPORTED_MODULE_2__framegroup__["a" /* FrameGroup */]();
            hackFrame.displayName = 'rmbdev';
            hackFrame.prevFrame = this.current;
            hackFrame.text = "Thanks for your time!!!\n        Credits: programming, character art, background art, writing: rmbdev\n        Special credits: Sayonara Zetsubou Sensei (character design)";
            this.current = hackFrame;
            this.setText();
            this.ended = true;
        }
        else {
            document.getElementById('img0_0').style.display = 'none';
            //document.getElementById('img1_0').style.display = 'initial';
            this.current = this.chapter[0];
            this.ended = false;
            this.setText();
        }
    };
    GameComponent.prototype.setText = function () {
        this.speaker = this.current.displayName ? this.current.displayName.replace(/%s/, this.username) : '';
        this.textContent = this.current.text.replace(/%s/, this.username);
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/components/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/github/github.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-data {\n  height: 400px;\n  overflow-y: auto;\n}\n\n.gh-image {\n  width: 75px;\n  height: 75px;\n  float: right\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/github/github.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <h1>VN Basic: {{ gameName }} </h1>\n  <div class=\"table-row\" style=\"margin-bottom: 10px\">\n  </div>\n  <table class=\"table table-hover\">\n    <tbody>\n      <tr (click)=\"onNextClick()\">\n        <th scope=\"row\" class=\"col-md-4\">{{lang.newGame}}</th>\n        <!--<td class=\"col-md-8\"><a href=\"{{user.html_url}}\">{{user.html_url}}</a></td>\n          <td class=\"col-md-4\"><img src=\"{{user.avatar_url}}\" [class.gh-image]=\"true\"></td>-->\n      </tr>\n      <tr (click)=\"nothing()\">\n        <th scope=\"row\" class=\"col-md-4\">{{lang.loadGame}}</th>\n      </tr>\n      <tr (click)=\"nothing()\">\n        <th scope=\"row\" class=\"col-md-4\">{{lang.options}}</th>\n      </tr>\n    </tbody>\n  </table>\n</nav>\n<div class=\"table-data\">\n  <div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/github/github.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitHubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_english__ = __webpack_require__("../../../../../src/app/i18n/english.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GitHubComponent = /** @class */ (function () {
    function GitHubComponent(ghService, router) {
        this.ghService = ghService;
        this.router = router;
        this.githubUsers = [];
        this.lang = new __WEBPACK_IMPORTED_MODULE_3__i18n_english__["a" /* English */]();
        this.gameName = 'VN Demo';
    }
    GitHubComponent.prototype.ngOnInit = function () {
        //this.onNextClick();
    };
    GitHubComponent.prototype.nothing = function () {
        //nothing
    };
    GitHubComponent.prototype.onResetClick = function () {
        this.userid = '';
        this.onNextClick();
    };
    GitHubComponent.prototype.onNextClick = function () {
        this.router.navigate(['/newgame'], { queryParams: {}, skipLocationChange: true });
    };
    GitHubComponent.prototype.fetchUsers = function (id) {
        var _this = this;
        var param = {
            userid: id
        };
        this.ghService.getUsers(param).subscribe(function (res) {
            _this.userid = _this.grepUserid(res.headers.link);
            _this.githubUsers = res.body;
        }, function (err) { return console.log(err); });
    };
    GitHubComponent.prototype.grepUserid = function (link) {
        return link.replace(/.*since=(\d+).*/, '$1');
    };
    GitHubComponent.prototype.doClick = function (user) {
        this.router.navigate(['/users'], { queryParams: user, skipLocationChange: true });
    };
    GitHubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/components/github/github.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/github/github.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GHService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GHService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], GitHubComponent);
    return GitHubComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary\" *ngIf=global_navbar>\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/\">VN Basic</a>\n      <button type=\"button\" class=\"navbar-toggler\" data-toggler=\"collapse\" data-target=\"#navbar\"\n        aria-label=\"ToggleNavigation\" aria-expanded=\"true\" aria-controls=\"navbar\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\n          <a routerLink=\"/\" class=\"nav-link\">Home</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.global_navbar = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/newgame/newgame.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/newgame/newgame.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: grid\">\n  <h1>{{ lang.newGame }}</h1>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <label style=\"width: 120px\">{{ lang.name }}:</label>\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" required>\n    </li>\n    <li class=\"list-group-item\">\n      <label style=\"width: 120px\">Age:</label>\n      <input type=\"text\" placeholder=\"420\">\n    </li>\n    <li class=\"list-group-item\">\n      <label>* No gameplay elements listen to age.  Main character is 1X years old.</label>\n    </li>\n  </ul>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"newGame()\">{{ lang.done }}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/newgame/newgame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewgameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_english__ = __webpack_require__("../../../../../src/app/i18n/english.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewgameComponent = /** @class */ (function () {
    function NewgameComponent(router) {
        this.router = router;
        this.username = 'Xx_skrublordz3000_xX';
        this.lang = new __WEBPACK_IMPORTED_MODULE_1__i18n_english__["a" /* English */]();
    }
    NewgameComponent.prototype.ngOnInit = function () {
    };
    NewgameComponent.prototype.newGame = function () {
        localStorage.setItem('username', this.username);
        if (this.username) {
            this.router.navigate(['/game'], { queryParams: { username: this.username }, skipLocationChange: true });
        }
    };
    NewgameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newgame',
            template: __webpack_require__("../../../../../src/app/components/newgame/newgame.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/newgame/newgame.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewgameComponent);
    return NewgameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h1>{{user.login}}</h1>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\"><label>Name: {{user.name}}</label></li>\n    <li class=\"list-group-item\"><label>Company: {{user.company}}</label></li>\n    <li class=\"list-group-item\"><label>Blog: {{user.blog}}</label></li>\n    <li class=\"list-group-item\"><label>Location: {{user.location}}</label></li>\n    <li class=\"list-group-item\"><label>Email: {{user.email}}</label></li>\n    <li class=\"list-group-item\"><label>Bio: {{user.bio}}</label></li>\n    <li class=\"list-group-item\"><label>Public Repos: {{user.public_repos}}</label></li>\n    <li class=\"list-group-item\"><label>Followers: {{user.followers}}</label></li>\n    <li class=\"list-group-item\"><label>Following: {{user.following}}</label></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(ghService, route) {
        var _this = this;
        this.ghService = ghService;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.ghService.getUser(params).subscribe(function (res) {
                res.login = params.login;
                _this.user = res;
            });
        });
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
            styleUrls: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_github_service__["a" /* GHService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_github_service__["a" /* GHService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/i18n/english.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return English; });
var English = /** @class */ (function () {
    function English() {
        this.newGame = 'New Game';
        this.loadGame = 'Load Game';
        this.options = 'Options';
        this.name = 'Name';
        this.done = 'Done';
        this.charIds = ['n1', 'p1', 'kitsu_chiri'];
        this.ch1 = [
            {
                charId: 'kitsu_chiri',
                displayName: '???',
                children: [
                    { text: "Hello %s, Welcome!  I'm Kistu Chiri" },
                    {
                        displayName: 'Kitsu-san',
                        children: [
                            { text: 'Game over, skrub!  Get rekt!' },
                            { text: 'Um... just kidding.' }
                        ]
                    }
                ]
            },
            {
                charId: 'p1',
                displayName: '%s',
                children: [
                    { text: 'Who are you!?' },
                    { text: 'What do you want!?' }
                ]
            },
            {
                charId: 'kitsu_chiri',
                displayName: 'Kitsu-san',
                children: [
                    { text: 'Hehehe...' },
                    { text: 'Are you having fun?' }
                ]
            },
            {
                charId: 'n1',
                displayName: '',
                text: 'After several days of that, Chrome finally shows her face.'
            },
            {
                charId: 'p1',
                displayName: 'Luka',
                text: 'Please... let me come...'
            },
            {
                charId: 'kitsu_chiri',
                displayName: 'Chrome',
                children: [
                    { text: 'Hmph.' },
                    { text: 'Well, I want to see the results of the medicine I gave you from a few days ago, so we\'ll see.' },
                    { text: '...' }
                ]
            },
            {
                charId: 'p1',
                displayName: '%s',
                text: '...'
            },
            {
                charId: 'kitsu_chiri',
                displayName: 'Kitsu-san',
                children: [
                    { text: '...' },
                    { text: 'Well that was an interesting cosplay.' }
                ]
            },
            {
                charId: 'p1',
                displayName: '%s',
                text: 'Cosplay?'
            },
            {
                charId: 'kitsu_chiri',
                displayName: 'Kitsu-san',
                text: "Don't ask too many questions.  Anyway, what brings you here today?"
            },
            {
                charId: 'p1',
                displayName: '%s',
                children: [
                    { text: "Well, I'd like to pick an answer, but the dev isn't too far along with this." },
                    { text: "That aside, I'm here to ask you something." }
                ]
            },
            {
                charId: 'kitsu_chiri',
                displayName: 'Kitsu-san',
                text: "Oh?  And what would that be?"
            },
            {
                charId: 'p1',
                displayName: '%s',
                text: "What's that background picture of?"
            },
            {
                charId: 'kitsu_chiri',
                displayName: 'Kitsu-san',
                children: [
                    { text: "That?  It's from a 3D model of downtown Minneapolis." },
                    { text: "The proportions are accurate to within a few feet." },
                    { text: "But couldn't it have been to within a few centimeters?\n                    Even I can do that much." }
                ]
            },
            {
                charId: 'p1',
                displayName: '%s',
                children: [
                    { text: "Weren't you the one who drew up a 900-page schedule for our school trip?" },
                    { text: "In two minute increments..." }
                ]
            },
            {
                charId: 'kitsu_chiri',
                displayName: 'Irritated Kitsu-san',
                children: [
                    { text: '...' },
                    { text: "I think you're asking too many questions." }
                ]
            }
        ];
        this.ch2 = [
            {
                charId: 'kitsu_chiri',
                displayName: 'Kitsu-san',
                text: 'Welcome to Chapter 3! I mean 2.',
                options: [
                    {
                        label: 'Say something',
                        children: [
                            { displayName: 'Irritated Kitsu-san', text: "I won't let you!" },
                            { charId: 'p1', displayName: '%s', text: "..." },
                        ]
                    },
                    {
                        label: 'Say nothing',
                        children: [
                            { text: '...oops.  Thanks for being polite.' },
                            { charId: 'p1', displayName: '%s', text: "No problem" },
                            { text: "Wait a second..." }
                        ]
                    }
                ]
            },
            {
                charId: 'kitsu_chiri',
                displayName: 'Kitsu-san',
                children: [
                    { text: 'I guess making choices is possible now.' },
                    { text: "Too bad I can't use this to write my own stories; that might be cool..." }
                ]
            },
            {
                charId: 'kitsu_chiri',
                displayName: 'Kitsu-san',
                text: "Hey, do you think this can handle more than 2 choices?",
                options: [
                    {
                        label: 'Yes',
                        children: [
                            { text: "Your vote of confidence is appreciated." },
                            { text: "Our logic and algorithms let the writer write, and the computer figures things out." }
                        ]
                    },
                    {
                        label: "No",
                        children: [
                            { text: "You should have more faith!" },
                            { text: "All it takes is a decent algorithm." },
                            { text: "Now then, back to business." },
                        ]
                    },
                    {
                        label: "I don't know.",
                        children: [
                            { text: "You should have more faith!" },
                            { text: "All it takes is a decent algorithm." },
                            { text: "Don't pick wishy-washy answers like \"I don't know\"." },
                        ]
                    }
                ]
            },
            {
                charId: 'p1',
                displayName: '%s',
                text: '...',
                options: [
                    {
                        label: 'Ok',
                        children: [
                            {
                                charId: 'kitsu_chiri',
                                displayName: 'Kitsu-san',
                                children: [
                                    {
                                        text: "Good."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        this.chErr = [
            { displayName: 'Kitsu-san', text: 'Oops...' },
            { displayName: 'Kitsu-san', text: "Something went wrong.  Don't ask me!" }
        ];
    }
    return English;
}());



/***/ }),

/***/ "../../../../../src/app/services/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GHService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GHService = /** @class */ (function () {
    function GHService(http) {
        this.http = http;
        this.baseurl = 'http://rmbcorporate.com/';
    }
    GHService.prototype.getUsers = function (param) {
        var query = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('per_page', '50')
            .set('since', param.userid);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](),
            observe: 'response',
            params: query
        };
        return this.getResponseWithCustomField(this.http.get(this.baseurl + 'users', options), 'Link');
    };
    GHService.prototype.getResponseWithCustomField = function (response, field) {
        return response.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            response.headers['link'] = response.headers.get(field);
            return response;
        }));
    };
    GHService.prototype.getUser = function (param) {
        var query = '/' + param.login;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        return this.http.get(this.baseurl + 'users' + query, { headers: headers });
    };
    GHService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GHService);
    return GHService;
}());



/***/ }),

/***/ "../../../../../src/assets/MplsNicollet.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "MplsNicollet.43cd3c81098324914c89.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map