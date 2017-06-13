webpackJsonp([1,4],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 114;


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(128);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(205),
        styles: [__webpack_require__(184)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navigation_bar_navigation_bar_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_signup_signup_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_guard__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navigation_bar_navigation_bar_component__["a" /* NavigationBarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__app_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_signup_signup_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_signin_signin_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_guard__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_2__components_signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_3__components_signin_signin_component__["a" /* SigninComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__app_guard__["a" /* AuthGuard */]]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(206),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationBarComponent = (function () {
    function NavigationBarComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationStart */]) {
                _this.auth.isAuthenticated().subscribe(function (res) {
                    _this.isAuthenticated = res.status;
                    console.log(_this.isAuthenticated);
                });
            }
        });
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/']);
        });
    };
    return NavigationBarComponent;
}());
NavigationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-navigation-bar',
        template: __webpack_require__(208),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavigationBarComponent);

var _a, _b;
//# sourceMappingURL=navigation-bar.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "footer{\r\n  margin-top: 40px;\r\n  padding: 50px 0;\r\n  background-color: #5cb85c;\r\n  width: 100%;\r\n  height: auto;\r\n  position: fixed;\r\n  bottom: 0%;\r\n  margin-top: 50%;\r\n}\r\n\r\n.nav-footer li{\r\n  list-style-type: none;\r\n  margin-bottom: 10px;\r\n}\r\n.footer-icons {\r\n  text-align: center;\r\n  margin-top: 40px;\r\n}\r\n.footer-icons i{\r\n  padding-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "header {\r\n \tmargin-top: 50px;\r\n    background-image: url(" + __webpack_require__(249) + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.main-content {\r\n  font-family: 'Varela Round', sans-serif;\r\n  color: #fff;\r\n}\r\n.main-content h1{\r\n  padding-top: 170px;\r\n  font-size: 46px;\r\n}\r\n.main-content p{\r\n  font-size: 18px;\r\n}\r\n.panel-title{\r\n  text-align: center;\r\n}\r\n.panel-heading{\r\n  padding: 25px 15px;\r\n}\r\n.panel-default>.panel-heading {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n.sign-up{\r\n  margin-top: 100px;\r\n  margin-bottom: 100px;\r\n}\r\n.sign-up input{\r\n  width: 100%;\r\n  background-color: #f9fafa;\r\n  border-color: #d4d9dd;\r\n  border: 2px solid #d4d9dd;\r\n  border-radius: 4px;\r\n  padding: 10px;\r\n}\r\n.sign-up-page{\r\n  margin-bottom: 0;\r\n}\r\n.row-space{\r\n  padding-top: 15px;\r\n}\r\n/* BODY */\r\n.h2-message{\r\n  text-align: center;\r\n  padding: 10px 0;\r\n}\r\n.message-h1{\r\n\tbackground-color: #6aaf6a;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n\tmargin-bottom: 50px;\r\n}\r\n.message-h1 h1{\r\n\tmargin-top: 10px;\r\n}\r\n.quiz-header{\r\n  background-color: #ccc;\r\n  padding: 5px 15px;\r\n}\r\n.quiz-header h3{\r\n  margin-top: 10px;\r\n}\r\n.quiz-ul{\r\n  padding-left: 20px;\r\n}\r\n.quiz-ul li{\r\n  list-style-type: none;\r\n}\r\n.quiz-ul li input{\r\n  margin-right: 10px;\r\n}\r\n/* Videos CSS*/\r\n.top-header{\r\n  margin-top: 50px;\r\n  height: 100px;\r\n  background-color: #fff;\r\n}\r\n.top-header h1{\r\n  margin: 0;\r\n  line-height: 100px;\r\n}\r\n.videos-bg{\r\n  background-color: #e5e5e5;\r\n}\r\n.tab-bg{\r\n  background-color: #fff;\r\n}\r\n.tab-style{\r\n  padding: 10px;\r\n}\r\n.tab-style h2{\r\n  margin: 0;\r\n  padding-top: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n.info-section{\r\n  margin-top: 40px;\r\n  padding-top: 20px;\r\n  background-color: #fff;\r\n}\r\n.info-section ul{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".logo{\r\n  padding-top: 2px;\r\n}\r\n.logo img{\r\n  height: 45px;\r\n}\r\n.navbar-default {\r\n  height: 49px;\r\n}\r\n.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {\r\n  background-color: #6aaf6a;\r\n  color: #fff;\r\n}\r\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\r\n  border-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\r\n.padding-top{\r\n  padding-top: 60px;\r\n}\r\n.padding-bottom-image{\r\n  margin-bottom: 10px;\r\n}\r\n.main-content {\r\n  font-family: 'Varela Round', sans-serif;\r\n  color: #fff;\r\n}\r\n.main-content h1{\r\n  padding-top: 170px;\r\n  font-size: 46px;\r\n}\r\n.main-content p{\r\n  font-size: 18px;\r\n}\r\n.panel-title{\r\n  text-align: center;\r\n}\r\n.panel-heading{\r\n  padding: 25px 15px;\r\n}\r\n.panel-default>.panel-heading {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n.sign-up{\r\n  margin-top: 100px;\r\n  margin-bottom: 100px;\r\n}\r\n.sign-up input{\r\n  width: 100%;\r\n  background-color: #f9fafa;\r\n  border-color: #d4d9dd;\r\n  border: 2px solid #d4d9dd;\r\n  border-radius: 4px;\r\n  padding: 10px;\r\n}\r\n.sign-up-page{\r\n  margin-bottom: 0;\r\n}\r\n.row-space{\r\n  padding-top: 15px;\r\n}\r\n/* BODY */\r\n.h2-message{\r\n  text-align: center;\r\n  padding: 10px 0;\r\n}\r\n.message-h1{\r\n\tbackground-color: #6aaf6a;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n\tmargin-bottom: 50px;\r\n}\r\n.message-h1 h1{\r\n\tmargin-top: 10px;\r\n}\r\n.quiz-header{\r\n  background-color: #ccc;\r\n  padding: 5px 15px;\r\n}\r\n.quiz-header h3{\r\n  margin-top: 10px;\r\n}\r\n.quiz-ul{\r\n  padding-left: 20px;\r\n}\r\n.quiz-ul li{\r\n  list-style-type: none;\r\n}\r\n.quiz-ul li input{\r\n  margin-right: 10px;\r\n}\r\n/* Videos CSS*/\r\n.top-header{\r\n  margin-top: 50px;\r\n  height: 100px;\r\n  background-color: #fff;\r\n}\r\n.top-header h1{\r\n  margin: 0;\r\n  line-height: 100px;\r\n}\r\n.videos-bg{\r\n  background-color: #e5e5e5;\r\n}\r\n.tab-bg{\r\n  background-color: #fff;\r\n}\r\n.tab-style{\r\n  padding: 10px;\r\n}\r\n.tab-style h2{\r\n  margin: 0;\r\n  padding-top: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n.info-section{\r\n  margin-top: 40px;\r\n  padding-top: 20px;\r\n  background-color: #fff;\r\n}\r\n.info-section ul{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".panel-title{\r\n  text-align: center;\r\n}\r\n.panel-heading{\r\n  padding: 25px 15px;\r\n}\r\n.panel-default>.panel-heading {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n.sign-up{\r\n  margin-top: 100px;\r\n  margin-bottom: 100px;\r\n}\r\n.sign-up input{\r\n  width: 100%;\r\n  background-color: #f9fafa;\r\n  border-color: #d4d9dd;\r\n  border: 2px solid #d4d9dd;\r\n  border-radius: 4px;\r\n  padding: 10px;\r\n}\r\n.sign-up-page{\r\n  margin-bottom: 0;\r\n}\r\n.row-space{\r\n  padding-top: 15px;\r\n}\r\n/* BODY */\r\n.h2-message{\r\n  text-align: center;\r\n  padding: 10px 0;\r\n}\r\n.message-h1{\r\n\tbackground-color: #6aaf6a;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n\tmargin-bottom: 50px;\r\n}\r\n.message-h1 h1{\r\n\tmargin-top: 10px;\r\n}\r\n.quiz-header{\r\n  background-color: #ccc;\r\n  padding: 5px 15px;\r\n}\r\n.quiz-header h3{\r\n  margin-top: 10px;\r\n}\r\n.quiz-ul{\r\n  padding-left: 20px;\r\n}\r\n.quiz-ul li{\r\n  list-style-type: none;\r\n}\r\n.quiz-ul li input{\r\n  margin-right: 10px;\r\n}\r\n/* Videos CSS*/\r\n.top-header{\r\n  margin-top: 50px;\r\n  height: 100px;\r\n  background-color: #fff;\r\n}\r\n.top-header h1{\r\n  margin: 0;\r\n  line-height: 100px;\r\n}\r\n.videos-bg{\r\n  background-color: #e5e5e5;\r\n}\r\n.tab-bg{\r\n  background-color: #fff;\r\n}\r\n.tab-style{\r\n  padding: 10px;\r\n}\r\n.tab-style h2{\r\n  margin: 0;\r\n  padding-top: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n.info-section{\r\n  margin-top: 40px;\r\n  padding-top: 20px;\r\n  background-color: #fff;\r\n}\r\n.info-section ul{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".sign-up {\r\n    margin-top: 100px;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.sign-up input {\r\n    width: 100%;\r\n    background-color: #f9fafa;\r\n    border-color: #d4d9dd;\r\n    border: 2px solid #d4d9dd;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n}\r\n\r\n.sign-up-page {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.panel-title{\r\n  text-align: center;\r\n}\r\n\r\n.panel-heading{\r\n  padding: 25px 15px;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n\r\n.row-space{\r\n  padding-top: 15px;\r\n}\r\n\r\n.h2-message{\r\n  text-align: center;\r\n  padding: 10px 0;\r\n}\r\n.message-h1{\r\n\tbackground-color: #6aaf6a;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n\tmargin-bottom: 50px;\r\n}\r\n.message-h1 h1{\r\n\tmargin-top: 10px;\r\n}\r\n.quiz-header{\r\n  background-color: #ccc;\r\n  padding: 5px 15px;\r\n}\r\n.quiz-header h3{\r\n  margin-top: 10px;\r\n}\r\n.quiz-ul{\r\n  padding-left: 20px;\r\n}\r\n.quiz-ul li{\r\n  list-style-type: none;\r\n}\r\n.quiz-ul li input{\r\n  margin-right: 10px;\r\n}\r\n/* Videos CSS*/\r\n.top-header{\r\n  margin-top: 50px;\r\n  height: 100px;\r\n  background-color: #fff;\r\n}\r\n.top-header h1{\r\n  margin: 0;\r\n  line-height: 100px;\r\n}\r\n.videos-bg{\r\n  background-color: #e5e5e5;\r\n}\r\n.tab-bg{\r\n  background-color: #fff;\r\n}\r\n.tab-style{\r\n  padding: 10px;\r\n}\r\n.tab-style h2{\r\n  margin: 0;\r\n  padding-top: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n.info-section{\r\n  margin-top: 40px;\r\n  padding-top: 20px;\r\n  background-color: #fff;\r\n}\r\n.info-section ul{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.status = true;
    }
    AuthService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3002/user/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        return this.http.get('http://localhost:3002/user/logout')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.http.get('http://localhost:3002/user/status')
            .take(1)
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img class=\"img-responsive center-block\" src=\"./assets/img/homeimages/footer-logo.png\"/>\n            <h5 class=\"text-center\">2017 Genius Brothers Vision, LLC.</h5>\n          </div>\n          <div class=\"col-md-4\">\n            <ul class=\"nav-footer text-center\">\n              <li><a href=\"#\">Courses</a></li>\n              <li><a href=\"#\">Blog</a></li>\n              <li><a href=\"#\">Sign in</a></li>\n              <li><a href=\"#\">Sign up</a></li>\n            </ul>\n          </div>\n          <div class=\"col-md-4 footer-icons\">\n            <i class=\"fa fa-youtube fa-3x\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-instagram fa-3x\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-facebook-official fa-3x\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-twitter-square fa-3x\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<header>\n    <!-- background image -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 main-content\">\n          <h1>Learn algebra & take quizzes for FREE</h1>\n          <p>Sign-up to get access to algebra videos tutorial, quizzes to test your knowlage and much more.</p>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"panel panel-default sign-up\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Are you ready to pass your test?</h3>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Full Name</label>\n                  <input>\n                </div>\n                <div class=\"col-md-6\">\n                  <label>Username</label>\n                  <input>\n                </div>\n              </div>\n              <div class=\"row row-space\">\n                <div class=\"col-md-6\">\n                  <label>Email Address</label>\n                  <input>\n                </div>\n                <div class=\"col-md-6\">\n                  <label>Password</label>\n                  <input>\n                </div>\n              </div>\n              <hr/>\n              <button type=\"button\" class=\"btn btn-block btn-lg btn-success\">Sign up</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"h2-message\">How Genius Lectures Works</h2>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default\">\n        <img class=\"img-responsive\" src=\"./assets/img/homeimages/video.jpg\"/>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4>Learn from our videos</h4>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default\">\n        <img class=\"img-responsive\" src=\"./assets/img/homeimages/quiz.jpg\"/>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4>Practice with our quizzes</h4>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-default\">\n        <img class=\"img-responsive\" src=\"./assets/img/homeimages/graduation.jpg\"/>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4>Graduate sooner</h4>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <hr /> -->\n  <div class=\"row\">\n    <div class=\"col-md-12\"><h2 class=\"h2-message\">Try this example below</h2></div>\n    <div class=\"col-md-6\">\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v2jtbhdRySY\" frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-default\">\n        <div class=\"quiz-header\">\n          <h5>Quiz Question 2 of 4</h5>\n          <h3>Adding Fractions</h3>\n        </div>\n        <div class=\"panel-body\">\n          <h3>3x + 4y + 10x</h3>\n          <ul class=\"quiz-ul\">\n            <li><input type=\"checkbox\"> 17x</li>\n            <li><input type=\"checkbox\"> 3x + 14y</li>\n            <li><input type=\"checkbox\"> 7x + 4y</li>\n            <li><input type=\"checkbox\"> 13x + 4y</li>\n          </ul>\n          <button type=\"button\" class=\"btn btn-md btn-success\">Next</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top navbar-custom\" role=navigation>\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header page-scroll logo\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n            </button>\n            <a href=\"index.html\" class=\"navbar-brand logo\"><img class=\"img-responsive\" src=\"./assets/img/logo.png\"/></a>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav navbar-right bg-color\">\n              <li class=\"page-scroll\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n                  <a routerLink=\"/\">Home</a>\n              </li>\n              <li class=\"btn-group\" dropdown>\n                <a href=\"#\" class=\"dropdown-toggle\" dropdownToggle>Courses <span class=\"caret\"></span></a>\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                  <li><a href=\"basic-algebra.html\">Basic</a></li>\n                  <li><a href=\"intermediate-algebra.html\">Intermediate</a></li>\n                </ul>\n              </li>\n              <li class=\"page-scroll\">\n                  <a href=\"#\">Blog</a>\n              </li>\n              <li *ngIf = \"!isAuthenticated\" class=\"page-scroll\" routerLinkActive = \"active\">\n                  <a routerLink = \"/signin\">Sign In</a>\n              </li>\n              <li *ngIf = \"!isAuthenticated\"  class=\"page-scroll\" routerLinkActive=\"active\">\n                  <a routerLink = \"/signup\">Sign Up</a>\n              </li>\n              <li *ngIf = \"isAuthenticated\" class=\"page-scroll\" routerLinkActive = \"active\">\n                  <a routerLink = \"/profile\">Profile</a>\n              </li>\n              <li *ngIf = \"isAuthenticated\" class=\"page-scroll\">\n                  <a href=\"#\" (click) = \"logout()\">Sign out</a>\n              </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row padding-top\">\n    <div class=\"col-md-2\">\n      <img class=\"img-responsive padding-bottom-image\" src=\"../../../assets/img/profile/profile.png\">\n      <h3>{{ user.name }}</h3>\n      <h4>{{ user.username }}</h4>\n    </div>\n    <div class=\"col-md-10\">\n      <img class=\"img-responsive padding-bottom-image\" src=\"../../../assets/img/courses/panoramic.jpg\">\n      <tabset>\n        <tab heading = \"Courses\">\n          <h1>Courses</h1>\n          <!--<div class=\"col-md-6\">\n            <h3>Basic Algebra</h3>\n            <img class=\"img-responsive\" src=\"resources/img/courses/placeholder.jpg\">\n            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n          </div>\n          <div class=\"col-md-6\">\n            <h3>Intermediate Algebra</h3>\n            <img class=\"img-responsive\" src=\"resources/img/courses/placeholder.jpg\">\n            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n          </div>-->\n        </tab>\n        <tab heading = \"Settings\">\n          <h2>Settings</h2>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <div class=\"panel panel-default sign-up sign-up-page\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Welcome back!</h3>\n            </div>\n            <form (submit) = \"login($event)\" class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <label>Username</label>\n                  <input name=\"username\" [(ngModel)]=\"user.username\">\n                </div>\n              </div>\n              <div class=\"row row-space\">\n                <div class=\"col-md-12\">\n                  <label>Password</label>\n                  <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\">\n                </div>\n              </div>\n              <hr/>\n              <button type=\"submit\" class=\"btn btn-block btn-lg btn-success\">Sign in</button>\n            </form>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\"><h2 class=\"h2-message\">Videos and Quizzes</h2></div>\n          <div class=\"col-md-6\">\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v2jtbhdRySY\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"panel panel-default\">\n              <div class=\"quiz-header\">\n                <h5>Quiz Question 2 of 4</h5>\n                <h3>Adding Fractions</h3>\n              </div>\n              <div class=\"panel-body\">\n                <h3>3x + 4y + 10x</h3>\n                <ul class=\"quiz-ul\">\n                  <li><input type=\"checkbox\"> 17x</li>\n                  <li><input type=\"checkbox\"> 3x + 14y</li>\n                  <li><input type=\"checkbox\"> 7x + 4y</li>\n                  <li><input type=\"checkbox\"> 13x + 4y</li>\n                </ul>\n                <button type=\"button\" class=\"btn btn-md btn-success\">Next</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <div class=\"panel panel-default sign-up sign-up-page\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Are you ready to pass your test?</h3>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Full Name</label>\n                  <input [(ngModel)] = \"name\">\n                </div>\n                <div class=\"col-md-6\">\n                  <label>Username</label>\n                  <input [(ngModel)] = \"username\">\n                </div>\n              </div>\n              <div class=\"row row-space\">\n                <div class=\"col-md-12\">\n                  <label>Email Address</label>\n                  <input [(ngModel)] = \"email\">\n                </div>\n              </div>\n              <div class = \"row row-space\">\n                <div class=\"col-md-6\">\n                  <label>Password</label>\n                  <input [(ngModel)] = \"password\" type=\"password\">\n                </div>\n                <div class=\"col-md-6\">\n                  <label>Repeat the password</label>\n                  <input [(ngModel)] = \"password2\" type=\"password\">\n                </div>\n              </div>\n              <hr/>\n              <button type=\"button\" class=\"btn btn-block btn-lg btn-success\" (click) = \"register()\">Sign up</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\"><h2 class=\"h2-message\">Videos and Quizzes</h2></div>\n          <div class=\"col-md-6\">\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v2jtbhdRySY\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"panel panel-default\">\n              <div class=\"quiz-header\">\n                <h5>Quiz Question 2 of 4</h5>\n                <h3>Adding Fractions</h3>\n              </div>\n              <div class=\"panel-body\">\n                <h3>3x + 4y + 10x</h3>\n                <ul class=\"quiz-ul\">\n                  <li><input type=\"checkbox\"> 17x</li>\n                  <li><input type=\"checkbox\"> 3x + 14y</li>\n                  <li><input type=\"checkbox\"> 7x + 4y</li>\n                  <li><input type=\"checkbox\"> 13x + 4y</li>\n                </ul>\n                <button type=\"button\" class=\"btn btn-md btn-success\">Next</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>"

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg-img.13a511f78b8d0655d416.jpg";

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(115);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.isAuthenticated().map(function (res) {
            if (!res.status) {
                console.log('BLOCKED BY AUTH GUARD');
                _this.router.navigate(['/']);
            }
            return res.status;
        });
        //Uncomment this only for development purposes
        //return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=app.guard.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(207),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(209),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.user = {};
    };
    SigninComponent.prototype.login = function (e) {
        var _this = this;
        e.preventDefault();
        this.auth.login(this.user)
            .subscribe(function (user) {
            var user_data = {
                name: user.data.name,
                email: user.data.email,
                username: user.data.username
            };
            localStorage.setItem('user', JSON.stringify(user_data));
            _this.router.navigate(['/profile']);
        }, function (error) {
            console.log(error);
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__(210),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SigninComponent);

var _a, _b;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignupComponent.prototype.clean = function () {
        this.name = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.password2 = '';
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            password2: this.password2
        };
        this.userService.register(user)
            .subscribe(function (user) {
            console.log('user created!');
            _this.clean();
            _this.router.navigate(['/signin']);
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(211),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3002/user/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ })

},[251]);
//# sourceMappingURL=main.bundle.js.map