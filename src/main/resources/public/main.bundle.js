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

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\" style=\"margin-top: 70px\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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

var AppComponent = (function () {
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
var AppModule = (function () {
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
var FrameGroup = (function () {
    function FrameGroup(parent) {
        if (parent) {
            this.charId = parent.charId;
            this.displayName = parent.displayName;
        }
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
            if (parent) {
                if (!frame.charId)
                    frame.charId = parent.charId;
                if (!frame.displayName)
                    frame.displayName = parent.displayName;
            }
            if (frame.text) {
                current = frame;
                if (result.length > 0) {
                    var latest = result[result.length - 1];
                    latest.next = current;
                    current.prev = latest;
                }
                result.push(current);
            }
            else {
                current = undefined;
            }
            if (frame.children) {
                _this.buildFrames(frame.children, frame, result);
                // .forEach(child => result.push(child));
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
    return FrameGroup;
}());
var CharGroup = (function () {
    function CharGroup() {
        this.text = '';
    }
    return CharGroup;
}());



/***/ }),

/***/ "../../../../../src/app/components/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n    background-color: rgba(16, 16, 16, .75);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n    display: none;\r\n    -webkit-animation-name: deinani;\r\n            animation-name: deinani;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n}\r\n.bgimg {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/MplsNicollet.png") + ") no-repeat center fixed;\r\n    background-size: cover;\r\n    \r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    z-index: -1;\r\n    overflow-x: auto;\r\n}\r\n.txtbox {\r\n    position: absolute;\r\n    top: 70%;\r\n    width: 70%;\r\n    min-width: 460px;\r\n    height: 30%;\r\n    padding: 16px;\r\n    color: white;\r\n    background: rgba(0, 0, 16, .75);\r\n    z-index: 2;\r\n}\r\n.txtarea {\r\n    margin: 6px;\r\n    font-size: 14pt;\r\n}\r\n.img1 {\r\n    position: absolute;\r\n    -webkit-animation-name: meinani;\r\n            animation-name: meinani;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    /*animation-fill-mode: forwards;*/\r\n}\r\n\r\n@-webkit-keyframes meinani {\r\n    0% {\r\n        -webkit-transform: translateX(-400px);\r\n                transform: translateX(-400px);\r\n    }\r\n}\r\n\r\n@keyframes meinani {\r\n    0% {\r\n        -webkit-transform: translateX(-400px);\r\n                transform: translateX(-400px);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes deinani {\r\n    0% {\r\n        background-color: rgba(240, 0, 16, .70)\r\n    }\r\n}\r\n\r\n@keyframes deinani {\r\n    0% {\r\n        background-color: rgba(240, 0, 16, .70)\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"img0_0\" class=\"overlay\"></div>\r\n<div class=\"bgimg\">\r\n</div>\r\n<div id=\"img1_0\" class=\"img1\">\r\n  <img src=\"assets/KicchiriProd.jpg\" (click)=\"next()\">\r\n</div>\r\n<div id=\"txtbox\" class=\"txtbox\" *ngIf=\"txtbox.visible\">\r\n  <label class=\"txtarea\">{{ speaker }}</label>\r\n  <button type=\"button\" class=\"btn btn-danger float-right\" (click)=\"end()\"  *ngIf=\"!current.next\">End</button>\r\n  <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"next()\" [(disabled)]=\"!current.next\">Next</button>\r\n  <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"prev()\" *ngIf=\"current.prev\">Prev</button>\r\n  <label class=\"txtarea\" style=\"display: block\" *ngFor=\"let content of textContent.split('\\n')\">{{ content }}</label>\r\n</div>"

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



var GameComponent = (function () {
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
        this.chapter = __WEBPACK_IMPORTED_MODULE_2__framegroup__["a" /* FrameGroup */].mkframes(this.lang.ch1);
        this.current = this.chapter[0];
    }
    GameComponent.prototype.ngOnInit = function () {
        localStorage.setItem('global.navbar', 'false');
        this.setText();
    };
    GameComponent.prototype.next = function () {
        if (this.current.next)
            this.current = this.current.next;
        this.setText();
    };
    GameComponent.prototype.prev = function () {
        this.current = this.current.prev;
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
            hackFrame.prev = this.current;
            hackFrame.text = "Thanks for your time!!!\n        Credits: programming, character art, background art, writing: rmbdev\n        Special credits: Sayonara Zetsubou Sensei (character design)";
            this.current = hackFrame;
            this.setText();
            this.ended = true;
        }
        else {
            document.getElementById('img0_0').style.display = 'none';
            //document.getElementById('img1_0').style.display = 'initial';
            this.current = this.chapter[5];
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
exports.push([module.i, ".table-data {\r\n  height: 400px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.gh-image {\r\n  width: 75px;\r\n  height: 75px;\r\n  float: right\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/github/github.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <h1>VN Basic: {{ gameName }} </h1>\r\n  <div class=\"table-row\" style=\"margin-bottom: 10px\">\r\n  </div>\r\n  <table class=\"table table-hover\">\r\n    <tbody>\r\n      <tr (click)=\"onNextClick()\">\r\n        <th scope=\"row\" class=\"col-md-4\">{{lang.newGame}}</th>\r\n        <!--<td class=\"col-md-8\"><a href=\"{{user.html_url}}\">{{user.html_url}}</a></td>\r\n          <td class=\"col-md-4\"><img src=\"{{user.avatar_url}}\" [class.gh-image]=\"true\"></td>-->\r\n      </tr>\r\n      <tr (click)=\"nothing()\">\r\n        <th scope=\"row\" class=\"col-md-4\">{{lang.loadGame}}</th>\r\n      </tr>\r\n      <tr (click)=\"nothing()\">\r\n        <th scope=\"row\" class=\"col-md-4\">{{lang.options}}</th>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</nav>\r\n<div class=\"table-data\">\r\n  <div>\r\n\r\n  </div>\r\n</div>"

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




var GitHubComponent = (function () {
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

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary\" *ngIf=global_navbar>\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"/\">VN Basic</a>\r\n      <button type=\"button\" class=\"navbar-toggler\" data-toggler=\"collapse\" data-target=\"#navbar\"\r\n        aria-label=\"ToggleNavigation\" aria-expanded=\"true\" aria-controls=\"navbar\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"navbar-nav\">\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" class=\"nav-item\">\r\n          <a routerLink=\"/\" class=\"nav-link\">Home</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

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

var NavbarComponent = (function () {
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

module.exports = "<div style=\"display: grid\">\r\n  <h1>{{ lang.newGame }}</h1>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n      <label style=\"width: 120px\">{{ lang.name }}:</label>\r\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" required>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <label style=\"width: 120px\">Age:</label>\r\n      <input type=\"text\" placeholder=\"420\">\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <label>* No gameplay elements listen to age.  Main character is 1X years old.</label>\r\n    </li>\r\n  </ul>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"newGame()\">{{ lang.done }}</button>\r\n</div>\r\n"

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



var NewgameComponent = (function () {
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

module.exports = "<div *ngIf=\"user\">\r\n  <h1>{{user.login}}</h1>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\"><label>Name: {{user.name}}</label></li>\r\n    <li class=\"list-group-item\"><label>Company: {{user.company}}</label></li>\r\n    <li class=\"list-group-item\"><label>Blog: {{user.blog}}</label></li>\r\n    <li class=\"list-group-item\"><label>Location: {{user.location}}</label></li>\r\n    <li class=\"list-group-item\"><label>Email: {{user.email}}</label></li>\r\n    <li class=\"list-group-item\"><label>Bio: {{user.bio}}</label></li>\r\n    <li class=\"list-group-item\"><label>Public Repos: {{user.public_repos}}</label></li>\r\n    <li class=\"list-group-item\"><label>Followers: {{user.followers}}</label></li>\r\n    <li class=\"list-group-item\"><label>Following: {{user.following}}</label></li>\r\n  </ul>\r\n</div>\r\n"

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



var UsersComponent = (function () {
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
var English = (function () {
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
                text: 'Please... let me X...'
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
                    { text: "But couldn't it have been to within a few centimeters? \n                    Even I can do that much." }
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



var GHService = (function () {
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