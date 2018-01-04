webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/dashboard/home1/home1.module": [
		"../../../../../src/app/pages/dashboard/home1/home1.module.ts",
		"home1.module"
	],
	"./pages/dashboard/home2/home2.module": [
		"../../../../../src/app/pages/dashboard/home2/home2.module.ts",
		"home2.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--HEADER-->\n<adminlte-header></adminlte-header>\n<!--END HEADER-->\n\n<!--MAIN NAVIGATION-->\n<adminlte-sidenav></adminlte-sidenav>\n<!--END MAIN NAVIGATION-->\n\n<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper\">\n    <!--CONTENT-->\n    <router-outlet></router-outlet>\n    <!--END CONTENT-->\n</div>\n<!-- /.content-wrapper -->\n\n<!-- FOOTER -->\n<adminlte-footer></adminlte-footer>\n<!-- END FOOTER -->\n\n<!--ASIDE-->\n<adminlte-asidebar></adminlte-asidebar>\n<!--END ASIDE-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_service__ = __webpack_require__("../../../../../src/app/shared/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_setting_service__ = __webpack_require__("../../../../../src/app/shared/setting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(appSvc, setSvc) {
        this.appSvc = appSvc;
        this.setSvc = setSvc;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.scriptSvc.loadCompScript('AppComponent');
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.appSvc.Init();
        this.setSvc.Init();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'adminlte-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__shared_setting_service__["a" /* AppSettingService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_adminlte_common_module__ = __webpack_require__("../../../../../src/app/common/adminlte-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_app_service__ = __webpack_require__("../../../../../src/app/shared/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_setting_service__ = __webpack_require__("../../../../../src/app/shared/setting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule(router) {
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */]; })
            .subscribe(this.OnNavigate);
    }
    AppModule.prototype.OnNavigate = function (event) {
        // We only receive NavigationEnd events
        switch (event.url) {
            case '/layouts/boxed':
            default:
                break;
        }
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__common_adminlte_common_module__["a" /* AdminLTECommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routes */], { useHash: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_9__shared_setting_service__["a" /* AppSettingService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var routes = [
    { path: '', data: ['Dashboard1'], loadChildren: './pages/dashboard/home1/home1.module#Home1Module' },
    { path: 'home/v1', data: ['Dashboard1'], loadChildren: './pages/dashboard/home1/home1.module#Home1Module' },
    { path: 'home/v2', data: ['Dashboard2'], loadChildren: './pages/dashboard/home2/home2.module#Home2Module' },
    { path: '**', redirectTo: '/' }
];


/***/ }),

/***/ "../../../../../src/app/common/adminlte-common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLTECommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/common/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asidebar_asidebar_component__ = __webpack_require__("../../../../../src/app/common/asidebar/asidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__asidebar_layout_settings_component__ = __webpack_require__("../../../../../src/app/common/asidebar/layout-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__asidebar_skin_settings_component__ = __webpack_require__("../../../../../src/app/common/asidebar/skin-settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AdminLTECommonModule = (function () {
    function AdminLTECommonModule() {
    }
    AdminLTECommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__asidebar_layout_settings_component__["a" /* LayoutSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__asidebar_skin_settings_component__["a" /* SkinSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__asidebar_asidebar_component__["a" /* AsidebarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__asidebar_asidebar_component__["a" /* AsidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            providers: []
        })
    ], AdminLTECommonModule);
    return AdminLTECommonModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/asidebar/asidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Control Sidebar -->\r\n<aside class=\"control-sidebar control-sidebar-dark\">\r\n    <!-- Create the tabs -->\r\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n        <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\r\n        <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\r\n    </ul>\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n        <!-- Home tab content -->\r\n        <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\r\n            <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n            <ul class=\"control-sidebar-menu\">\r\n                <li>\r\n                    <a href=\"javascript:void(0)\">\r\n                        <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n                        <div class=\"menu-info\">\r\n                            <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n                            <p>Will be 23 on April 24th</p>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\">\r\n                        <i class=\"menu-icon fa fa-user bg-yellow\"></i>\r\n\r\n                        <div class=\"menu-info\">\r\n                            <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\r\n\r\n                            <p>New phone +1(800)555-1234</p>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\">\r\n                        <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\r\n\r\n                        <div class=\"menu-info\">\r\n                            <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\r\n\r\n                            <p>nora@example.com</p>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\">\r\n                        <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\r\n\r\n                        <div class=\"menu-info\">\r\n                            <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\r\n\r\n                            <p>Execution time 5 seconds</p>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <!-- /.control-sidebar-menu -->\r\n\r\n            <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n            <ul class=\"control-sidebar-menu\">\r\n                <li>\r\n                    <a href=\"javascript:void(0)\">\r\n                        <h4 class=\"control-sidebar-subheading\">\r\n                            Custom Template Design\r\n                            <span class=\"label label-danger pull-right\">70%</span>\r\n                        </h4>\r\n\r\n                        <div class=\"progress progress-xxs\">\r\n                            <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\">\r\n                        <h4 class=\"control-sidebar-subheading\">\r\n                            Update Resume\r\n                            <span class=\"label label-success pull-right\">95%</span>\r\n                        </h4>\r\n\r\n                        <div class=\"progress progress-xxs\">\r\n                            <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\">\r\n                        <h4 class=\"control-sidebar-subheading\">\r\n                            Laravel Integration\r\n                            <span class=\"label label-warning pull-right\">50%</span>\r\n                        </h4>\r\n\r\n                        <div class=\"progress progress-xxs\">\r\n                            <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\">\r\n                        <h4 class=\"control-sidebar-subheading\">\r\n                            Back End Framework\r\n                            <span class=\"label label-primary pull-right\">68%</span>\r\n                        </h4>\r\n\r\n                        <div class=\"progress progress-xxs\">\r\n                            <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <!-- /.control-sidebar-menu -->\r\n\r\n        </div>\r\n\r\n        <!-- /.control-sidebar-themes -->\r\n        <div id=\"control-sidebar-theme-demo-options-tab\" class=\"tab-pane active\">\r\n            <div>\r\n                <adminlte-layout-settings></adminlte-layout-settings>\r\n                <h4 class=\"control-sidebar-heading\">Skins</h4>\r\n                <adminlte-skin-settings></adminlte-skin-settings>\r\n            </div>\r\n        </div>\r\n        <!-- /.control-sidebar-themes -->\r\n\r\n        <!-- /.tab-pane -->\r\n        <!-- Stats tab content -->\r\n        <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\r\n        <!-- /.tab-pane -->\r\n        <!-- Settings tab content -->\r\n        <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n            <form method=\"post\">\r\n                <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-sidebar-subheading\">\r\n                    Report panel usage\r\n                    <input type=\"checkbox\" class=\"pull-right\" checked>\r\n                    </label>\r\n\r\n                    <p>\r\n                        Some information about this general settings option\r\n                    </p>\r\n                </div>\r\n                <!-- /.form-group -->\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-sidebar-subheading\">\r\n                    Allow mail redirect\r\n                    <input type=\"checkbox\" class=\"pull-right\" checked>\r\n                    </label>\r\n\r\n                    <p>\r\n                        Other sets of options are available\r\n                    </p>\r\n                </div>\r\n                <!-- /.form-group -->\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-sidebar-subheading\">\r\n                    Expose author name in posts\r\n                    <input type=\"checkbox\" class=\"pull-right\" checked>\r\n                    </label>\r\n\r\n                    <p>\r\n                        Allow the user to show his name in blog posts\r\n                    </p>\r\n                </div>\r\n                <!-- /.form-group -->\r\n\r\n                <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-sidebar-subheading\">\r\n                    Show me as online\r\n                    <input type=\"checkbox\" class=\"pull-right\" checked>\r\n                    </label>\r\n                </div>\r\n                <!-- /.form-group -->\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-sidebar-subheading\">\r\n                    Turn off notifications\r\n                    <input type=\"checkbox\" class=\"pull-right\">\r\n                    </label>\r\n                </div>\r\n                <!-- /.form-group -->\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-sidebar-subheading\">\r\n                    Delete chat history\r\n                    <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    </label>\r\n                </div>\r\n                <!-- /.form-group -->\r\n            </form>\r\n        </div>\r\n        <!-- /.tab-pane -->\r\n    </div>\r\n</aside>\r\n<!-- /.control-sidebar -->\r\n<!-- Add the sidebar's background. This div must be placed\r\n     immediately after the control sidebar -->\r\n<div class=\"control-sidebar-bg\"></div>"

/***/ }),

/***/ "../../../../../src/app/common/asidebar/asidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AsidebarComponent = (function () {
    function AsidebarComponent() {
    }
    AsidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'adminlte-asidebar',
            template: __webpack_require__("../../../../../src/app/common/asidebar/asidebar.component.html")
        })
    ], AsidebarComponent);
    return AsidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/asidebar/layout-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"control-sidebar-heading\">\r\n    Layout Options\r\n</h4>\r\n<!--Fixed layout-->\r\n<div class=\"form-group\">\r\n    <label class=\"control-sidebar-subheading\">\r\n        <input type=\"checkbox\" data-layout=\"fixed\"class=\"pull-right\"/>\r\n        Fixed layout\r\n    </label>\r\n    <p>Activate the fixed layout. You can\\'t use fixed and boxed layouts together</p>\r\n</div>\r\n<!--Boxed layout-->\r\n<div class=\"form-group\">\r\n    <label class=\"control-sidebar-subheading\">\r\n        <input type=\"checkbox\" data-layout=\"layout-boxed\" class=\"pull-right\"/>\r\n        Boxed Layout\r\n    </label>\r\n    <p>Activate the boxed layout</p>\r\n</div>\r\n<!--Sidebar Toggle-->\r\n<div class=\"form-group\">\r\n    <label class=\"control-sidebar-subheading\">\r\n        <input type=\"checkbox\" data-layout=\"sidebar-collapse\"class=\"pull-right\"/>\r\n        Toggle Sidebar\r\n    </label>\r\n    <p>Toggle the left sidebar\\'s state (open or collapse)</p>\r\n</div>\r\n<!--Sidebar mini expand on hover toggle-->\r\n<div class=\"form-group\">\r\n    <label class=\"control-sidebar-subheading\">\r\n        <input type=\"checkbox\" data-enable=\"expandOnHover\"class=\"pull-right\"/>\r\n        Sidebar Expand on Hover\r\n    </label>\r\n    <p>const the sidebar mini expand on hover</p>\r\n</div>\r\n<!--Control Sidebar Toggle-->\r\n<div class=\"form-group\">\r\n    <label class=\"control-sidebar-subheading\">\r\n        <input type=\"checkbox\" data-controlsidebar=\"control-sidebar-open\"class=\"pull-right\"/>\r\n        Toggle Right Sidebar Slide\r\n    </label>\r\n    <p>Toggle between slide over content and push content effects</p>\r\n</div>\r\n<!--Control Sidebar Skin Toggle-->\r\n<div class=\"form-group\">\r\n    <label class=\"control-sidebar-subheading\">\r\n        <input type=\"checkbox\" data-sidebarskin=\"toggle\"class=\"pull-right\"/>\r\n        Toggle Right Sidebar Skin\r\n    </label>\r\n    <p>Toggle between dark and light skins for the right sidebar</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/asidebar/layout-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutSettingsComponent = (function () {
    function LayoutSettingsComponent() {
    }
    LayoutSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'adminlte-layout-settings',
            template: __webpack_require__("../../../../../src/app/common/asidebar/layout-settings.component.html")
        })
    ], LayoutSettingsComponent);
    return LayoutSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/asidebar/skin-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class='list-unstyled clearfix'>\r\n    <!-- Blue-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-blue\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px; background: #367fa9\"></span>\r\n                <span class=\"bg-light-blue\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\">Blue</p>\r\n    </li>\r\n    <!-- Black-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-black\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div style=\"box-shadow: 0 0 2px rgba(0,0,0,0.1)\" class=\"clearfix\">\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px; background: #fefefe\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 7px; background: #fefefe\"></span>\r\n            </div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #222\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\">Black</p>\r\n    </li>\r\n    <!-- Purple-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-purple\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-purple-active\"></span>\r\n                <span class=\"bg-purple\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span>\r\n            </div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\">Purple</p>\r\n    </li>\r\n    <!-- Green-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-green\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-green-active\"></span>\r\n                <span class=\"bg-green\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\">Green</p>\r\n    </li>\r\n    <!-- Red-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-red\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-red-active\"></span>\r\n                <span class=\"bg-red\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\">Red</p>\r\n    </li>\r\n    <!-- Yellow-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-yellow\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-yellow-active\"></span>\r\n                <span class=\"bg-yellow\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span></div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #222d32\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\">Yellow</p>\r\n    </li>\r\n    <!-- BlueLight-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-blue-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px; background: #367fa9\"></span>\r\n                <span class=\"bg-light-blue\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span>\r\n            </div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\" style=\"font-size: 12px\">Blue Light</p>\r\n    </li>\r\n    <!-- BlackLight-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-black-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div style=\"box-shadow: 0 0 2px rgba(0,0,0,0.1)\" class=\"clearfix\">\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px; background: #fefefe\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 7px; background: #fefefe\"></span>\r\n            </div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\" style=\"font-size: 12px\">Black Light</p>\r\n    </li>\r\n    <!-- Blue-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-purple-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-purple-active\"></span>\r\n                <span class=\"bg-purple\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span>\r\n            </div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\" style=\"font-size: 12px\">Purple Light</p>\r\n    </li>\r\n    <!-- Blue-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-green-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-green-active\"></span>\r\n                <span class=\"bg-green\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span>\r\n            </div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\" style=\"font-size: 12px\">Green Light</p>\r\n    </li>\r\n    <!-- Blue-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-red-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-red-active\"></span>\r\n                <span class=\"bg-red\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span>\r\n            </div>\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\" style=\"font-size: 12px\">Red Light</p>\r\n    </li>\r\n    <!-- Blue-->\r\n    <li style='float:left; width: 33.33333%; padding: 5px;'>\r\n        <a href=\"javascript:void(0)\" data-skin=\"skin-yellow-light\" style=\"display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)\" class=\"clearfix full-opacity-hover\">\r\n            <div>\r\n                <span style=\"display:block; width: 20%; float: left; height: 7px;\" class=\"bg-yellow-active\"></span>\r\n                <span class=\"bg-yellow\" style=\"display:block; width: 80%; float: left; height: 7px;\"></span>\r\n            </div>\r\n            <div><span style=\"display:block; width: 20%; float: left; height: 20px; background: #f9fafc\"></span>\r\n                <span style=\"display:block; width: 80%; float: left; height: 20px; background: #f4f5f7\"></span>\r\n            </div>\r\n        </a>\r\n        <p class=\"text-center no-margin\" style=\"font-size: 12px\">Yellow Light</p>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/common/asidebar/skin-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkinSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SkinSettingsComponent = (function () {
    function SkinSettingsComponent() {
    }
    SkinSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'adminlte-skin-settings',
            template: __webpack_require__("../../../../../src/app/common/asidebar/skin-settings.component.html")
        })
    ], SkinSettingsComponent);
    return SkinSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- /.content-wrapper -->\r\n<footer class=\"main-footer\">\r\n    <div class=\"pull-right hidden-xs\">\r\n        <b>Version</b> 2.4.0\r\n    </div>\r\n    <strong>Copyright &copy; 2014-2016 <a href=\"https://adminlte.io\">Almsaeed Studio</a>.</strong> All rights reserved.\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'adminlte-footer',
            template: __webpack_require__("../../../../../src/app/common/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n    <!-- Logo -->\r\n    <a href=\"index2.html\" class=\"logo\">\r\n        <!-- mini logo for sidebar mini 50x50 pixels -->\r\n        <span class=\"logo-mini\"><b>A</b>LT</span>\r\n        <!-- logo for regular state and mobile devices -->\r\n        <span class=\"logo-lg\"><b>Admin</b>LTE</span>\r\n    </a>\r\n    <!-- Header Navbar: style can be found in header.less -->\r\n    <nav class=\"navbar navbar-static-top\">\r\n        <!-- Sidebar toggle button-->\r\n        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n        </a>\r\n\r\n        <div class=\"navbar-custom-menu\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <!-- Messages: style can be found in dropdown.less-->\r\n                <li class=\"dropdown messages-menu\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-envelope-o\"></i>\r\n                        <span class=\"label label-success\">4</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li class=\"header\">You have 4 messages</li>\r\n                        <li>\r\n                            <!-- inner menu: contains the actual data -->\r\n                            <ul class=\"menu\">\r\n                                <li>\r\n                                    <!-- start message -->\r\n                                    <a href=\"#\">\r\n                                        <div class=\"pull-left\">\r\n                                            <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                                        </div>\r\n                                        <h4>\r\n                                            Support Team\r\n                                            <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\r\n                                        </h4>\r\n                                        <p>Why not buy a new awesome theme?</p>\r\n                                    </a>\r\n                                </li>\r\n                                <!-- end message -->\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <div class=\"pull-left\">\r\n                                            <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                                        </div>\r\n                                        <h4>\r\n                                            AdminLTE Design Team\r\n                                            <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\r\n                                        </h4>\r\n                                        <p>Why not buy a new awesome theme?</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <div class=\"pull-left\">\r\n                                            <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                                        </div>\r\n                                        <h4>\r\n                                            Developers\r\n                                            <small><i class=\"fa fa-clock-o\"></i> Today</small>\r\n                                        </h4>\r\n                                        <p>Why not buy a new awesome theme?</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <div class=\"pull-left\">\r\n                                            <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                                        </div>\r\n                                        <h4>\r\n                                            Sales Department\r\n                                            <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\r\n                                        </h4>\r\n                                        <p>Why not buy a new awesome theme?</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <div class=\"pull-left\">\r\n                                            <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                                        </div>\r\n                                        <h4>\r\n                                            Reviewers\r\n                                            <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\r\n                                        </h4>\r\n                                        <p>Why not buy a new awesome theme?</p>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\r\n                    </ul>\r\n                </li>\r\n                <!-- Notifications: style can be found in dropdown.less -->\r\n                <li class=\"dropdown notifications-menu\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-bell-o\"></i>\r\n                        <span class=\"label label-warning\">10</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li class=\"header\">You have 10 notifications</li>\r\n                        <li>\r\n                            <!-- inner menu: contains the actual data -->\r\n                            <ul class=\"menu\">\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the page and may cause design problems\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <i class=\"fa fa-users text-red\"></i> 5 new members joined\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <i class=\"fa fa-user text-red\"></i> You changed your username\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"footer\"><a href=\"#\">View all</a></li>\r\n                    </ul>\r\n                </li>\r\n                <!-- Tasks: style can be found in dropdown.less -->\r\n                <li class=\"dropdown tasks-menu\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-flag-o\"></i>\r\n                        <span class=\"label label-danger\">9</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li class=\"header\">You have 9 tasks</li>\r\n                        <li>\r\n                            <!-- inner menu: contains the actual data -->\r\n                            <ul class=\"menu\">\r\n                                <li>\r\n                                    <!-- Task item -->\r\n                                    <a href=\"#\">\r\n                                        <h3>\r\n                                            Design some buttons\r\n                                            <small class=\"pull-right\">20%</small>\r\n                                        </h3>\r\n                                        <div class=\"progress xs\">\r\n                                            <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                <span class=\"sr-only\">20% Complete</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                                <!-- end task item -->\r\n                                <li>\r\n                                    <!-- Task item -->\r\n                                    <a href=\"#\">\r\n                                        <h3>\r\n                                            Create a nice theme\r\n                                            <small class=\"pull-right\">40%</small>\r\n                                        </h3>\r\n                                        <div class=\"progress xs\">\r\n                                            <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                <span class=\"sr-only\">40% Complete</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                                <!-- end task item -->\r\n                                <li>\r\n                                    <!-- Task item -->\r\n                                    <a href=\"#\">\r\n                                        <h3>\r\n                                            Some task I need to do\r\n                                            <small class=\"pull-right\">60%</small>\r\n                                        </h3>\r\n                                        <div class=\"progress xs\">\r\n                                            <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                <span class=\"sr-only\">60% Complete</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                                <!-- end task item -->\r\n                                <li>\r\n                                    <!-- Task item -->\r\n                                    <a href=\"#\">\r\n                                        <h3>\r\n                                            Make beautiful transitions\r\n                                            <small class=\"pull-right\">80%</small>\r\n                                        </h3>\r\n                                        <div class=\"progress xs\">\r\n                                            <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                                                <span class=\"sr-only\">80% Complete</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </a>\r\n                                </li>\r\n                                <!-- end task item -->\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"footer\">\r\n                            <a href=\"#\">View all tasks</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <!-- User Account: style can be found in dropdown.less -->\r\n                <li class=\"dropdown user user-menu\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\r\n                        <span class=\"hidden-xs\">Alexander Pierce</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <!-- User image -->\r\n                        <li class=\"user-header\">\r\n                            <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n                            <p>\r\n                                Alexander Pierce - Web Developer\r\n                                <small>Member since Nov. 2012</small>\r\n                            </p>\r\n                        </li>\r\n                        <!-- Menu Body -->\r\n                        <li class=\"user-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-4 text-center\">\r\n                                    <a href=\"#\">Followers</a>\r\n                                </div>\r\n                                <div class=\"col-xs-4 text-center\">\r\n                                    <a href=\"#\">Sales</a>\r\n                                </div>\r\n                                <div class=\"col-xs-4 text-center\">\r\n                                    <a href=\"#\">Friends</a>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.row -->\r\n                        </li>\r\n                        <!-- Menu Footer-->\r\n                        <li class=\"user-footer\">\r\n                            <div class=\"pull-left\">\r\n                                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\r\n                            </div>\r\n                            <div class=\"pull-right\">\r\n                                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <!-- Control Sidebar Toggle Button -->\r\n                <li>\r\n                    <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'adminlte-header',
            template: __webpack_require__("../../../../../src/app/common/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\r\n<aside class=\"main-sidebar\">\r\n    <!-- sidebar: style can be found in sidebar.less -->\r\n    <section class=\"sidebar\">\r\n        <!-- Sidebar user panel -->\r\n        <div class=\"user-panel\">\r\n            <div class=\"pull-left image\">\r\n                <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n            </div>\r\n            <div class=\"pull-left info\">\r\n                <p>Alexander Pierce</p>\r\n                <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n            </div>\r\n        </div>\r\n        <!-- search form -->\r\n        <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\r\n                <span class=\"input-group-btn\">\r\n                        <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                    </span>\r\n            </div>\r\n        </form>\r\n        <!-- /.search form -->\r\n        <!-- sidebar menu: : style can be found in sidebar.less -->\r\n        <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n            <li class=\"header\">MAIN NAVIGATION</li>\r\n            <li class=\"active treeview\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\r\n                    <span class=\"pull-right-container\">\r\n                            <i class=\"fa fa-angle-left pull-right\"></i>\r\n                        </span>\r\n                </a>\r\n                <ul class=\"treeview-menu\">\r\n                    <li class=\"active\"><a href=\"#/\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\r\n                    <li><a href=\"#/home/v2\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"treeview\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-files-o\"></i>\r\n                    <span>Layout Options</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <span class=\"label label-primary pull-right\">4</span>\r\n                    </span>\r\n                </a>\r\n                <ul class=\"treeview-menu\">\r\n                    <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\r\n                    <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li>\r\n                    <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li>\r\n                    <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <a href=\"pages/widgets.html\">\r\n                    <i class=\"fa fa-th\"></i> <span>Widgets</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <small class=\"label pull-right bg-green\">new</small>\r\n                        </span>\r\n                </a>\r\n            </li>\r\n            <li class=\"treeview\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-pie-chart\"></i>\r\n                    <span>Charts</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <i class=\"fa fa-angle-left pull-right\"></i>\r\n                        </span>\r\n                </a>\r\n                <ul class=\"treeview-menu\">\r\n                    <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li>\r\n                    <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li>\r\n                    <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li>\r\n                    <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"treeview\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-laptop\"></i>\r\n                    <span>UI Elements</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <i class=\"fa fa-angle-left pull-right\"></i>\r\n                        </span>\r\n                </a>\r\n                <ul class=\"treeview-menu\">\r\n                    <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li>\r\n                    <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li>\r\n                    <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li>\r\n                    <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li>\r\n                    <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li>\r\n                    <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"treeview\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-edit\"></i> <span>Forms</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <i class=\"fa fa-angle-left pull-right\"></i>\r\n                        </span>\r\n                </a>\r\n                <ul class=\"treeview-menu\">\r\n                    <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li>\r\n                    <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li>\r\n                    <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"treeview\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-table\"></i> <span>Tables</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <i class=\"fa fa-angle-left pull-right\"></i>\r\n                        </span>\r\n                </a>\r\n                <ul class=\"treeview-menu\">\r\n                    <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li>\r\n                    <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <a href=\"pages/calendar.html\">\r\n                    <i class=\"fa fa-calendar\"></i> <span>Calendar</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <small class=\"label pull-right bg-red\">3</small>\r\n                        <small class=\"label pull-right bg-blue\">17</small>\r\n                        </span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"pages/mailbox/mailbox.html\">\r\n                    <i class=\"fa fa-envelope\"></i> <span>Mailbox</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <small class=\"label pull-right bg-yellow\">12</small>\r\n                        <small class=\"label pull-right bg-green\">16</small>\r\n                        <small class=\"label pull-right bg-red\">5</small>\r\n                        </span>\r\n                </a>\r\n            </li>\r\n            <li class=\"treeview\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-folder\"></i> <span>Examples</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <i class=\"fa fa-angle-left pull-right\"></i>\r\n                        </span>\r\n                </a>\r\n                <ul class=\"treeview-menu\">\r\n                    <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li>\r\n                    <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li>\r\n                    <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li>\r\n                    <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li>\r\n                    <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li>\r\n                    <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li>\r\n                    <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li>\r\n                    <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li>\r\n                    <li><a href=\"pages/examples/pace.html\"><i class=\"fa fa-circle-o\"></i> Pace Page</a></li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"treeview\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-share\"></i> <span>Multilevel</span>\r\n                    <span class=\"pull-right-container\">\r\n                        <i class=\"fa fa-angle-left pull-right\"></i>\r\n                        </span>\r\n                </a>\r\n                <ul class=\"treeview-menu\">\r\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\r\n                    <li class=\"treeview\">\r\n                        <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One\r\n                                <span class=\"pull-right-container\">\r\n                                <i class=\"fa fa-angle-left pull-right\"></i>\r\n                                </span>\r\n                            </a>\r\n                        <ul class=\"treeview-menu\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li>\r\n                            <li class=\"treeview\">\r\n                                <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two\r\n                                        <span class=\"pull-right-container\">\r\n                                        <i class=\"fa fa-angle-left pull-right\"></i>\r\n                                        </span>\r\n                                    </a>\r\n                                <ul class=\"treeview-menu\">\r\n                                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\r\n                                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\r\n                                </ul>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\r\n                </ul>\r\n            </li>\r\n            <li><a href=\"https://adminlte.io/docs\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\r\n            <li class=\"header\">LABELS</li>\r\n            <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\r\n        </ul>\r\n    </section>\r\n    <!-- /.sidebar -->\r\n</aside>"

/***/ }),

/***/ "../../../../../src/app/common/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_routes__ = __webpack_require__("../../../../../src/app/common/sidenav/sidenav.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SidenavComponent = (function () {
    function SidenavComponent() {
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidenav_routes__["a" /* routes */];
    }
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'adminlte-sidenav',
            template: __webpack_require__("../../../../../src/app/common/sidenav/sidenav.component.html")
        })
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/sidenav/sidenav.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var dashboard = [
    { name: 'Homepage V1', icon: 'fa fa-caret-right', url: '/', isCategory: false, children: [] },
    { name: 'Homepage V2', icon: 'fa fa-caret-right', url: '/dashboard/home2', isCategory: false, children: [] },
    { name: 'Homepage V3', icon: 'fa fa-caret-right', url: '/dashboard/home3', isCategory: false, children: [] }
];
var ecommerce = [
    { name: 'Dashboard', icon: 'fa fa-caret-right', url: '/ecommerce/dashboard', isCategory: false, children: [] },
    { name: 'Order', icon: 'fa fa-caret-right', url: '/ecommerce/order', isCategory: false, children: [] },
    { name: 'Orders View', icon: 'fa fa-caret-right', url: '/ecommerce/orderview', isCategory: false, children: [] },
    { name: 'Product List', icon: 'fa fa-caret-right', url: '/ecommerce/products', isCategory: false, children: [] }
];
var layouts = [
    { name: 'Blank Page', icon: 'fa fa-caret-right', url: '/layouts/blank', isCategory: false, children: [] },
    { name: 'Boxed Version', icon: 'fa fa-caret-right', url: '/layouts/boxed', isCategory: false, children: [] },
    { name: 'Collapsed Sidebar', icon: 'fa fa-caret-right', url: '/layouts/sidebar', isCategory: false, children: [] },
    { name: 'Push Menu', icon: 'fa fa-caret-right', url: '/layouts/pushmenu', isCategory: false, children: [] },
    { name: 'Slide Menu', icon: 'fa fa-caret-right', url: '/layouts/slidemenu', isCategory: false, children: [] },
    { name: 'Horizontal Menu', icon: 'fa fa-caret-right', url: '/layouts/horzmenu', isCategory: false, children: [] },
    { name: 'Boxed Horizontal', icon: 'fa fa-caret-right', url: '/layouts/horzboxed', isCategory: false, children: [] },
    { name: 'Apps layout V1', icon: 'fa fa-caret-right', url: '/layouts/blank', isCategory: false, children: [] },
    { name: 'Apps layout V2', icon: 'fa fa-caret-right', url: '/layouts/appv2', isCategory: false, children: [] },
    { name: 'Full Width', icon: 'fa fa-caret-right', url: '/layouts/blank', isCategory: false, children: [] }
];
var uielements = [
    { name: 'Accordions', icon: 'fa fa-caret-right', url: '/ui/accordion', isCategory: false, children: [] },
    { name: 'CSS3 Animation', icon: 'fa fa-caret-right', url: '/ui/animation', isCategory: false, children: [] },
    { name: 'Buttons', icon: 'fa fa-caret-right', url: '/ui/button', isCategory: false, children: [] },
    { name: 'Components', icon: 'fa fa-caret-right', url: '/ui/components', isCategory: false, children: [] },
    { name: 'Draggable Panel', icon: 'fa fa-caret-right', url: '/ui/dragdrop', isCategory: false, children: [] },
    { name: 'Fontawesome', icon: 'fa fa-caret-right', url: '/ui/fontawesome', isCategory: false, children: [] },
    { name: 'Grids', icon: 'fa fa-caret-right', url: '/ui/grids', isCategory: false, children: [] },
    { name: 'Icons', icon: 'fa fa-caret-right', url: '/ui/icons', isCategory: false, children: [] },
    { name: 'Nested List', icon: 'fa fa-caret-right', url: '/ui/nestedlist', isCategory: false, children: [] },
    { name: 'Panel', icon: 'fa fa-caret-right', url: '/ui/panel', isCategory: false, children: [] },
    { name: 'Tab', icon: 'fa fa-caret-right', url: '/ui/tab', isCategory: false, children: [] },
    { name: 'Timeline', icon: 'fa fa-caret-right', url: '/ui/timeline', isCategory: false, children: [] },
    { name: 'Typography', icon: 'fa fa-caret-right', url: '/ui/typography', isCategory: false, children: [] },
    { name: 'Widgets', icon: 'fa fa-caret-right', url: '/ui/widgets', isCategory: false, children: [] },
    { name: 'Xeditable', icon: 'fa fa-caret-right', url: '/ui/xeditable', isCategory: false, children: [] }
];
var pages = [
    { name: 'Directory', icon: 'fa fa-caret-right', url: '/pages/directory', isCategory: false, children: [] },
    { name: '404 Error', icon: 'fa fa-caret-right', url: '/pages/error404', isCategory: false, children: [] },
    { name: '500 Error', icon: 'fa fa-caret-right', url: '/pages/error500', isCategory: false, children: [] },
    { name: 'FAQ', icon: 'fa fa-caret-right', url: '/pages/faq', isCategory: false, children: [] },
    { name: 'Gallery', icon: 'fa fa-caret-right', url: '/pages/gallery', isCategory: false, children: [] },
    { name: 'Invoice', icon: 'fa fa-caret-right', url: '/pages/invoice', isCategory: false, children: [] },
    { name: 'Lock Screen', icon: 'fa fa-caret-right', url: '/pages/lockscreen', isCategory: false, children: [] },
    { name: 'Login', icon: 'fa fa-caret-right', url: '/pages/login', isCategory: false, children: [] },
    { name: 'User Profile', icon: 'fa fa-caret-right', url: '/pages/profile', isCategory: false, children: [] },
    { name: 'Password Reminder', icon: 'fa fa-caret-right', url: '/pages/pwdreminder', isCategory: false, children: [] },
    { name: 'Register', icon: 'fa fa-caret-right', url: '/pages/register', isCategory: false, children: [] }
];
var tables = [
    { name: 'Static Table', icon: 'fa fa-caret-right', url: '/tables/static', isCategory: false, children: [] },
    { name: 'Datatable Table', icon: 'fa fa-caret-right', url: '/tables/datatable', isCategory: false, children: [] },
    { name: 'Footable Table', icon: 'fa fa-caret-right', url: '/tables/footable', isCategory: false, children: [] }
];
var forms = [
    { name: 'Form Layout', icon: 'fa fa-caret-right', url: '/forms/layout', isCategory: false, children: [] },
    { name: 'Form Switchery', icon: 'fa fa-caret-right', url: '/forms/switchery', isCategory: false, children: [] },
    { name: 'Form Components', icon: 'fa fa-caret-right', url: '/forms/components', isCategory: false, children: [] },
    { name: 'Form Validation', icon: 'fa fa-caret-right', url: '/forms/validation', isCategory: false, children: [] },
    { name: 'Form Wizard', icon: 'fa fa-caret-right', url: '/forms/wizard', isCategory: false, children: [] }
];
var charts = [
    { name: 'Flot Chart', icon: 'fa fa-caret-right', url: '/charts/flot', isCategory: false, children: [] },
    { name: 'Morris Chart', icon: 'fa fa-caret-right', url: '/charts/morris', isCategory: false, children: [] }
];
var mail = [
    { name: 'Inbox', icon: 'fa fa-caret-right', url: '/mail/inbox', isCategory: false, children: [] },
    { name: 'Compose', icon: 'fa fa-caret-right', url: '/mail/compose', isCategory: false, children: [] },
    { name: 'Mail View', icon: 'fa fa-caret-right', url: '/mail/mailview', isCategory: false, children: [] }
];
var maps = [
    { name: 'Google Maps', icon: 'fa fa-caret-right', url: '/maps/gmap', isCategory: false, children: [] },
    { name: 'Vector Maps', icon: 'fa fa-caret-right', url: '/maps/vectormap', isCategory: false, children: [] }
];
var routes = [
    { name: 'Navigation', icon: 'list-header', url: '', isCategory: true, children: [] },
    { name: 'Dashboard', icon: 'fa fa-home', url: '', isCategory: false, children: dashboard },
    { name: 'E-commerce', icon: 'fa fa-shopping-cart', url: '', isCategory: false, children: ecommerce },
    { name: '', icon: 'list-divider', url: '', isCategory: true, children: [] },
    { name: 'Components', icon: 'list-header', url: '', isCategory: true, children: [] },
    { name: 'Layouts', icon: 'fa fa-th', url: '', isCategory: false, children: layouts },
    { name: 'UI Elements', icon: 'fa fa-briefcase', url: '', isCategory: false, children: uielements },
    { name: 'Pages', icon: 'fa fa-file', url: '', isCategory: false, children: pages },
    { name: 'Tables', icon: 'fa fa-table', url: '', isCategory: false, children: tables },
    { name: 'Forms', icon: 'fa fa-edit', url: '', isCategory: false, children: forms },
    { name: 'Charts', icon: 'fa fa-line-chart', url: '', isCategory: false, children: charts },
    { name: '', icon: 'list-divider', url: '', isCategory: true, children: [] },
    { name: 'EXTRA', icon: 'list-header', url: '', isCategory: true, children: [] },
    { name: 'Calendar', icon: 'fa fa-calendar', url: '/calendar', isCategory: false, children: [] },
    { name: 'Widgets', icon: 'fa fa-flask', url: '/ui/widgets', isCategory: false, children: [] },
    { name: 'Mail', icon: 'fa fa-envelope-o', url: '', isCategory: false, children: mail },
    { name: 'Maps', icon: 'fa fa-map-marker', url: '', isCategory: false, children: maps }
];


/***/ }),

/***/ "../../../../../src/app/shared/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = (function () {
    function AppService() {
    }
    /**
     * Initialize App Service
     */
    AppService.prototype.Init = function () {
        // Make sure jQuery has been loaded
        if (typeof jQuery === 'undefined') {
            throw new Error('AdminLTE requires jQuery');
        }
        this.AddAJAXContent();
        this.AddsBoxWidget();
        this.ControlSidebar();
        this.DirectChat();
        this.Layout();
        this.PushMenu();
        this.TodoList();
        this.Tree();
    };
    /* BoxRefresh()
    * =========
    * Adds AJAX content control to a box.
    *
    * @Usage: $('#my-box').boxRefresh(options)
    *         or add [data-widget="box-refresh"] to the box element
    *         Pass any option as data-option="value"
    */
    AppService.prototype.AddAJAXContent = function () {
        'use strict';
        var DataKey = 'lte.boxrefresh';
        var Default = {
            source: '',
            params: {},
            trigger: '.refresh-btn',
            content: '.box-body',
            loadInContent: true,
            responseType: '',
            overlayTemplate: '<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',
            onLoadStart: function () { },
            onLoadDone: function (response) {
                return response;
            }
        };
        var Selector = {
            data: '[data-widget="box-refresh"]'
        };
        // BoxRefresh Class Definition
        // =========================
        var BoxRefresh = function (element, options) {
            this.element = element;
            this.options = options;
            this.$overlay = $(options.overlay);
            if (options.source === '') {
                throw new Error('Source url was not defined. Please specify a url in your BoxRefresh source option.');
            }
            this._setUpListeners();
            this.load();
        };
        BoxRefresh.prototype.load = function () {
            this._addOverlay();
            this.options.onLoadStart.call($(this));
            $.get(this.options.source, this.options.params, function (response) {
                if (this.options.loadInContent) {
                    $(this.options.content).html(response);
                }
                this.options.onLoadDone.call($(this), response);
                this._removeOverlay();
            }.bind(this), this.options.responseType !== '' && this.options.responseType);
        };
        // Private
        BoxRefresh.prototype._setUpListeners = function () {
            $(this.element).on('click', Selector.trigger, function (event) {
                if (event) {
                    event.preventDefault();
                }
                this.load();
            }.bind(this));
        };
        BoxRefresh.prototype._addOverlay = function () {
            $(this.element).append(this.$overlay);
        };
        BoxRefresh.prototype._removeOverlay = function () {
            $(this.element).remove(this.$overlay);
        };
        // Plugin Definition
        // =================
        function Plugin(option) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DataKey);
                if (!data) {
                    var options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
                    $this.data(DataKey, (data = new BoxRefresh($this, options)));
                }
                if (typeof option === 'string') {
                    if (typeof data[option] === 'undefined') {
                        throw new Error('No method named ' + option);
                    }
                    data[option]();
                }
            });
        }
        var old = $.fn.boxRefresh;
        $.fn.boxRefresh = Plugin;
        $.fn.boxRefresh.Constructor = BoxRefresh;
        // No Conflict Mode
        // ================
        $.fn.boxRefresh.noConflict = function () {
            $.fn.boxRefresh = old;
            return this;
        };
        // BoxRefresh Data API
        // =================
        $(window).on('load', function () {
            $(Selector.data).each(function () {
                Plugin.call($(this));
            });
        });
    };
    /* BoxWidget()
    * ======
    * Adds box widget functions to boxes.
    *
    * @Usage: $('.my-box').boxWidget(options)
    *         This plugin auto activates on any element using the `.box` class
    *         Pass any option as data-option="value"
    */
    AppService.prototype.AddsBoxWidget = function () {
        'use strict';
        var DataKey = 'lte.boxwidget';
        var Default = {
            animationSpeed: 500,
            collapseTrigger: '[data-widget="collapse"]',
            removeTrigger: '[data-widget="remove"]',
            collapseIcon: 'fa-minus',
            expandIcon: 'fa-plus',
            removeIcon: 'fa-times'
        };
        var Selector = {
            data: '.box',
            collapsed: '.collapsed-box',
            header: '.box-header',
            body: '.box-body',
            footer: '.box-footer',
            tools: '.box-tools'
        };
        var ClassName = {
            collapsed: 'collapsed-box'
        };
        var Event = {
            collapsed: 'collapsed.boxwidget',
            expanded: 'expanded.boxwidget',
            removed: 'removed.boxwidget'
        };
        // BoxWidget Class Definition
        // =====================
        var BoxWidget = function (element, options) {
            this.element = element;
            this.options = options;
            this._setUpListeners();
        };
        BoxWidget.prototype.toggle = function () {
            var isOpen = !$(this.element).is(Selector.collapsed);
            if (isOpen) {
                this.collapse();
            }
            else {
                this.expand();
            }
        };
        BoxWidget.prototype.expand = function () {
            var expandedEvent = $.Event(Event.expanded);
            var collapseIcon = this.options.collapseIcon;
            var expandIcon = this.options.expandIcon;
            $(this.element).removeClass(ClassName.collapsed);
            $(this.element)
                .children(Selector.header + ', ' + Selector.body + ', ' + Selector.footer)
                .children(Selector.tools)
                .find('.' + expandIcon)
                .removeClass(expandIcon)
                .addClass(collapseIcon);
            $(this.element).children(Selector.body + ', ' + Selector.footer)
                .slideDown(this.options.animationSpeed, function () {
                $(this.element).trigger(expandedEvent);
            }.bind(this));
        };
        BoxWidget.prototype.collapse = function () {
            var collapsedEvent = $.Event(Event.collapsed);
            var collapseIcon = this.options.collapseIcon;
            var expandIcon = this.options.expandIcon;
            $(this.element)
                .children(Selector.header + ', ' + Selector.body + ', ' + Selector.footer)
                .children(Selector.tools)
                .find('.' + collapseIcon)
                .removeClass(collapseIcon)
                .addClass(expandIcon);
            $(this.element).children(Selector.body + ', ' + Selector.footer)
                .slideUp(this.options.animationSpeed, function () {
                $(this.element).addClass(ClassName.collapsed);
                $(this.element).trigger(collapsedEvent);
            }.bind(this));
        };
        BoxWidget.prototype.remove = function () {
            var removedEvent = $.Event(Event.removed);
            $(this.element).slideUp(this.options.animationSpeed, function () {
                $(this.element).trigger(removedEvent);
                $(this.element).remove();
            }.bind(this));
        };
        // Private
        BoxWidget.prototype._setUpListeners = function () {
            var that = this;
            $(this.element).on('click', this.options.collapseTrigger, function (event) {
                if (event) {
                    event.preventDefault();
                }
                that.toggle($(this));
                return false;
            });
            $(this.element).on('click', this.options.removeTrigger, function (event) {
                if (event) {
                    event.preventDefault();
                }
                that.remove($(this));
                return false;
            });
        };
        // Plugin Definition
        // =================
        function Plugin(option) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DataKey);
                if (!data) {
                    var options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
                    $this.data(DataKey, (data = new BoxWidget($this, options)));
                }
                if (typeof option === 'string') {
                    if (typeof data[option] === 'undefined') {
                        throw new Error('No method named ' + option);
                    }
                    data[option]();
                }
            });
        }
        var old = $.fn.boxWidget;
        $.fn.boxWidget = Plugin;
        $.fn.boxWidget.Constructor = BoxWidget;
        // No Conflict Mode
        // ================
        $.fn.boxWidget.noConflict = function () {
            $.fn.boxWidget = old;
            return this;
        };
        // BoxWidget Data API
        // ==================
        $(window).on('load', function () {
            $(Selector.data).each(function () {
                Plugin.call($(this));
            });
        });
    };
    /* ControlSidebar()
    * ===============
    * Toggles the state of the control sidebar
    *
    * @Usage: $('#control-sidebar-trigger').controlSidebar(options)
    *         or add [data-toggle="control-sidebar"] to the trigger
    *         Pass any option as data-option="value"
    */
    AppService.prototype.ControlSidebar = function () {
        'use strict';
        var DataKey = 'lte.controlsidebar';
        var Default = {
            slide: true
        };
        var Selector = {
            sidebar: '.control-sidebar',
            data: '[data-toggle="control-sidebar"]',
            open: '.control-sidebar-open',
            bg: '.control-sidebar-bg',
            wrapper: '.wrapper',
            content: '.content-wrapper',
            boxed: '.layout-boxed'
        };
        var ClassName = {
            open: 'control-sidebar-open',
            fixed: 'fixed'
        };
        var Event = {
            collapsed: 'collapsed.controlsidebar',
            expanded: 'expanded.controlsidebar'
        };
        // ControlSidebar Class Definition
        // ===============================
        var ControlSidebar = function (element, options) {
            this.element = element;
            this.options = options;
            this.hasBindedResize = false;
            this.init();
        };
        ControlSidebar.prototype.init = function () {
            // Add click listener if the element hasn't been
            // initialized using the data API
            if (!$(this.element).is(Selector.data)) {
                $(this).on('click', this.toggle);
            }
            this.fix();
            $(window).resize(function () {
                this.fix();
            }.bind(this));
        };
        ControlSidebar.prototype.toggle = function (event) {
            if (event) {
                event.preventDefault();
            }
            this.fix();
            if (!$(Selector.sidebar).is(Selector.open) && !$('body').is(Selector.open)) {
                this.expand();
            }
            else {
                this.collapse();
            }
        };
        ControlSidebar.prototype.expand = function () {
            if (!this.options.slide) {
                $('body').addClass(ClassName.open);
            }
            else {
                $(Selector.sidebar).addClass(ClassName.open);
            }
            $(this.element).trigger($.Event(Event.expanded));
        };
        ControlSidebar.prototype.collapse = function () {
            $('body, ' + Selector.sidebar).removeClass(ClassName.open);
            $(this.element).trigger($.Event(Event.collapsed));
        };
        ControlSidebar.prototype.fix = function () {
            if ($('body').is(Selector.boxed)) {
                this._fixForBoxed($(Selector.bg));
            }
        };
        // Private
        ControlSidebar.prototype._fixForBoxed = function (bg) {
            bg.css({
                position: 'absolute',
                height: $(Selector.wrapper).height()
            });
        };
        // Plugin Definition
        // =================
        function Plugin(option) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DataKey);
                if (!data) {
                    var options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
                    $this.data(DataKey, (data = new ControlSidebar($this, options)));
                }
                if (typeof option === 'string') {
                    data.toggle();
                }
            });
        }
        var old = $.fn.controlSidebar;
        $.fn.controlSidebar = Plugin;
        $.fn.controlSidebar.Constructor = ControlSidebar;
        // No Conflict Mode
        // ================
        $.fn.controlSidebar.noConflict = function () {
            $.fn.controlSidebar = old;
            return this;
        };
        // ControlSidebar Data API
        // =======================
        $(document).on('click', Selector.data, function (event) {
            if (event) {
                event.preventDefault();
            }
            Plugin.call($(this), 'toggle');
        });
    };
    /* DirectChat()
    * ===============
    * Toggles the state of the control sidebar
    *
    * @Usage: $('#my-chat-box').directChat()
    *         or add [data-widget="direct-chat"] to the trigger
    */
    AppService.prototype.DirectChat = function () {
        'use strict';
        var DataKey = 'lte.directchat';
        var Selector = {
            data: '[data-widget="chat-pane-toggle"]',
            box: '.direct-chat'
        };
        var ClassName = {
            open: 'direct-chat-contacts-open'
        };
        // DirectChat Class Definition
        // ===========================
        var DirectChat = function (element) {
            this.element = element;
        };
        DirectChat.prototype.toggle = function ($trigger) {
            $trigger.parents(Selector.box).first().toggleClass(ClassName.open);
        };
        // Plugin Definition
        // =================
        function Plugin(option) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DataKey);
                if (!data) {
                    $this.data(DataKey, (data = new DirectChat($this)));
                }
                if (typeof option === 'string') {
                    data.toggle($this);
                }
            });
        }
        var old = $.fn.directChat;
        $.fn.directChat = Plugin;
        $.fn.directChat.Constructor = DirectChat;
        // No Conflict Mode
        // ================
        $.fn.directChat.noConflict = function () {
            $.fn.directChat = old;
            return this;
        };
        // DirectChat Data API
        // ===================
        $(document).on('click', Selector.data, function (event) {
            if (event) {
                event.preventDefault();
            }
            Plugin.call($(this), 'toggle');
        });
    };
    /* Layout()
     * ========
     * Implements AdminLTE layout.
     * Fixes the layout height in case min-height fails.
     *
     * @usage activated automatically upon window load.
     *        Configure any options by passing data-option="value"
     *        to the body tag.
     */
    AppService.prototype.Layout = function () {
        'use strict';
        var DataKey = 'lte.layout';
        var Default = {
            slimscroll: true,
            resetHeight: true
        };
        var Selector = {
            wrapper: '.wrapper',
            contentWrapper: '.content-wrapper',
            layoutBoxed: '.layout-boxed',
            mainFooter: '.main-footer',
            mainHeader: '.main-header',
            sidebar: '.sidebar',
            controlSidebar: '.control-sidebar',
            fixed: '.fixed',
            sidebarMenu: '.sidebar-menu',
            logo: '.main-header .logo'
        };
        var ClassName = {
            fixed: 'fixed',
            holdTransition: 'hold-transition'
        };
        var Layout = function (options) {
            this.options = options;
            this.bindedResize = false;
            this.activate();
        };
        Layout.prototype.activate = function () {
            this.fix();
            this.fixSidebar();
            $('body').removeClass(ClassName.holdTransition);
            if (this.options.resetHeight) {
                $('body, html, ' + Selector.wrapper).css({
                    'height': 'auto',
                    'min-height': '100%'
                });
            }
            if (!this.bindedResize) {
                $(window).resize(function () {
                    this.fix();
                    this.fixSidebar();
                    var events = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
                    $(Selector.logo + ', ' + Selector.sidebar).one(events, function () {
                        this.fix();
                        this.fixSidebar();
                    }.bind(this));
                }.bind(this));
                this.bindedResize = true;
            }
            $(Selector.sidebarMenu).on('expanded.tree', function () {
                this.fix();
                this.fixSidebar();
            }.bind(this));
            $(Selector.sidebarMenu).on('collapsed.tree', function () {
                this.fix();
                this.fixSidebar();
            }.bind(this));
        };
        Layout.prototype.fix = function () {
            // Remove overflow from .wrapper if layout-boxed exists
            $(Selector.layoutBoxed + ' > ' + Selector.wrapper).css('overflow', 'hidden');
            // Get window height and the wrapper height
            var footerHeight = $(Selector.mainFooter).outerHeight() || 0;
            var neg = $(Selector.mainHeader).outerHeight() + footerHeight;
            var windowHeight = $(window).height();
            var sidebarHeight = $(Selector.sidebar).height() || 0;
            // Set the min-height of the content and sidebar based on
            // the height of the document.
            if ($('body').hasClass(ClassName.fixed)) {
                $(Selector.contentWrapper).css('min-height', windowHeight - footerHeight);
            }
            else {
                var postSetHeight = void 0;
                if (windowHeight >= sidebarHeight) {
                    $(Selector.contentWrapper).css('min-height', windowHeight - neg);
                    postSetHeight = windowHeight - neg;
                }
                else {
                    $(Selector.contentWrapper).css('min-height', sidebarHeight);
                    postSetHeight = sidebarHeight;
                }
                // Fix for the control sidebar height
                var $controlSidebar = $(Selector.controlSidebar);
                if (typeof $controlSidebar !== 'undefined') {
                    if ($controlSidebar.height() > postSetHeight) {
                        $(Selector.contentWrapper).css('min-height', $controlSidebar.height());
                    }
                }
            }
        };
        Layout.prototype.fixSidebar = function () {
            // Make sure the body tag has the .fixed class
            if (!$('body').hasClass(ClassName.fixed)) {
                if (typeof $.fn.slimScroll !== 'undefined') {
                    $(Selector.sidebar).slimScroll({ destroy: true }).height('auto');
                }
                return;
            }
            // Enable slimscroll for fixed layout
            if (this.options.slimscroll) {
                if (typeof $.fn.slimScroll !== 'undefined') {
                    // Destroy if it exists
                    // $(Selector.sidebar).slimScroll({ destroy: true }).height('auto')
                    // Add slimscroll
                    $(Selector.sidebar).slimScroll({
                        height: ($(window).height() - $(Selector.mainHeader).height()) + 'px'
                    });
                }
            }
        };
        // Plugin Definition
        // =================
        function Plugin(option) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DataKey);
                if (!data) {
                    var options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
                    $this.data(DataKey, (data = new Layout(options)));
                }
                if (typeof option === 'string') {
                    if (typeof data[option] === 'undefined') {
                        throw new Error('No method named ' + option);
                    }
                    data[option]();
                }
            });
        }
        var old = $.fn.layout;
        $.fn.layout = Plugin;
        $.fn.layout.Constuctor = Layout;
        // No conflict mode
        // ================
        $.fn.layout.noConflict = function () {
            $.fn.layout = old;
            return this;
        };
        // Layout DATA-API
        // ===============
        $(window).on('load', function () {
            Plugin.call($('body'));
        });
    };
    /* PushMenu()
     * ==========
     * Adds the push menu functionality to the sidebar.
     *
     * @usage: $('.btn').pushMenu(options)
     *          or add [data-toggle="push-menu"] to any button
     *          Pass any option as data-option="value"
     */
    AppService.prototype.PushMenu = function () {
        'use strict';
        var DataKey = 'lte.pushmenu';
        var Default = {
            collapseScreenSize: 767,
            expandOnHover: false,
            expandTransitionDelay: 200
        };
        var Selector = {
            collapsed: '.sidebar-collapse',
            open: '.sidebar-open',
            mainSidebar: '.main-sidebar',
            contentWrapper: '.content-wrapper',
            searchInput: '.sidebar-form .form-control',
            button: '[data-toggle="push-menu"]',
            mini: '.sidebar-mini',
            expanded: '.sidebar-expanded-on-hover',
            layoutFixed: '.fixed'
        };
        var ClassName = {
            collapsed: 'sidebar-collapse',
            open: 'sidebar-open',
            mini: 'sidebar-mini',
            expanded: 'sidebar-expanded-on-hover',
            expandFeature: 'sidebar-mini-expand-feature',
            layoutFixed: 'fixed'
        };
        var Event = {
            expanded: 'expanded.pushMenu',
            collapsed: 'collapsed.pushMenu'
        };
        // PushMenu Class Definition
        // =========================
        var PushMenu = function (options) {
            this.options = options;
            this.init();
        };
        PushMenu.prototype.init = function () {
            if (this.options.expandOnHover ||
                ($('body').is(Selector.mini + Selector.layoutFixed))) {
                this.expandOnHover();
                $('body').addClass(ClassName.expandFeature);
            }
            $(Selector.contentWrapper).click(function () {
                // Enable hide menu when clicking on the content-wrapper on small screens
                if ($(window).width() <= this.options.collapseScreenSize && $('body').hasClass(ClassName.open)) {
                    this.close();
                }
            }.bind(this));
            // __Fix for android devices
            $(Selector.searchInput).click(function (e) {
                e.stopPropagation();
            });
        };
        PushMenu.prototype.toggle = function () {
            var windowWidth = $(window).width();
            var isOpen = !$('body').hasClass(ClassName.collapsed);
            if (windowWidth <= this.options.collapseScreenSize) {
                isOpen = $('body').hasClass(ClassName.open);
            }
            if (!isOpen) {
                this.open();
            }
            else {
                this.close();
            }
        };
        PushMenu.prototype.open = function () {
            var windowWidth = $(window).width();
            if (windowWidth > this.options.collapseScreenSize) {
                $('body').removeClass(ClassName.collapsed)
                    .trigger($.Event(Event.expanded));
            }
            else {
                $('body').addClass(ClassName.open)
                    .trigger($.Event(Event.expanded));
            }
        };
        PushMenu.prototype.close = function () {
            var windowWidth = $(window).width();
            if (windowWidth > this.options.collapseScreenSize) {
                $('body').addClass(ClassName.collapsed)
                    .trigger($.Event(Event.collapsed));
            }
            else {
                $('body').removeClass(ClassName.open + ' ' + ClassName.collapsed)
                    .trigger($.Event(Event.collapsed));
            }
        };
        PushMenu.prototype.expandOnHover = function () {
            $(Selector.mainSidebar).hover(function () {
                if ($('body').is(Selector.mini + Selector.collapsed) &&
                    $(window).width() > this.options.collapseScreenSize) {
                    this.expand();
                }
            }.bind(this), function () {
                if ($('body').is(Selector.expanded)) {
                    this.collapse();
                }
            }.bind(this));
        };
        PushMenu.prototype.expand = function () {
            setTimeout(function () {
                $('body').removeClass(ClassName.collapsed)
                    .addClass(ClassName.expanded);
            }, this.options.expandTransitionDelay);
        };
        PushMenu.prototype.collapse = function () {
            setTimeout(function () {
                $('body').removeClass(ClassName.expanded)
                    .addClass(ClassName.collapsed);
            }, this.options.expandTransitionDelay);
        };
        // PushMenu Plugin Definition
        // ==========================
        function Plugin(option) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DataKey);
                if (!data) {
                    var options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
                    $this.data(DataKey, (data = new PushMenu(options)));
                }
                if (option === 'toggle') {
                    data.toggle();
                }
            });
        }
        var old = $.fn.pushMenu;
        $.fn.pushMenu = Plugin;
        $.fn.pushMenu.Constructor = PushMenu;
        // No Conflict Mode
        // ================
        $.fn.pushMenu.noConflict = function () {
            $.fn.pushMenu = old;
            return this;
        };
        // Data API
        // ========
        $(document).on('click', Selector.button, function (e) {
            e.preventDefault();
            Plugin.call($(this), 'toggle');
        });
        $(window).on('load', function () {
            Plugin.call($(Selector.button));
        });
    };
    /* TodoList()
     * =========
     * Converts a list into a todoList.
     *
     * @Usage: $('.my-list').todoList(options)
     *         or add [data-widget="todo-list"] to the ul element
     *         Pass any option as data-option="value"
     */
    AppService.prototype.TodoList = function () {
        'use strict';
        var DataKey = 'lte.todolist';
        var Default = {
            onCheck: function (item) {
                return item;
            },
            onUnCheck: function (item) {
                return item;
            }
        };
        var Selector = {
            data: '[data-widget="todo-list"]'
        };
        var ClassName = {
            done: 'done'
        };
        // TodoList Class Definition
        // =========================
        var TodoList = function (element, options) {
            this.element = element;
            this.options = options;
            this._setUpListeners();
        };
        TodoList.prototype.toggle = function (item) {
            item.parents(Selector.li).first().toggleClass(ClassName.done);
            if (!item.prop('checked')) {
                this.unCheck(item);
                return;
            }
            this.check(item);
        };
        TodoList.prototype.check = function (item) {
            this.options.onCheck.call(item);
        };
        TodoList.prototype.unCheck = function (item) {
            this.options.onUnCheck.call(item);
        };
        // Private
        TodoList.prototype._setUpListeners = function () {
            var that = this;
            $(this.element).on('change ifChanged', 'input:checkbox', function () {
                that.toggle($(this));
            });
        };
        // Plugin Definition
        // =================
        function Plugin(option) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DataKey);
                if (!data) {
                    var options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
                    $this.data(DataKey, (data = new TodoList($this, options)));
                }
                if (typeof option === 'string') {
                    if (typeof data[option] === 'undefined') {
                        throw new Error('No method named ' + option);
                    }
                    data[option]();
                }
            });
        }
        var old = $.fn.todoList;
        $.fn.todoList = Plugin;
        $.fn.todoList.Constructor = TodoList;
        // No Conflict Mode
        // ================
        $.fn.todoList.noConflict = function () {
            $.fn.todoList = old;
            return this;
        };
        // TodoList Data API
        // =================
        $(window).on('load', function () {
            $(Selector.data).each(function () {
                Plugin.call($(this));
            });
        });
    };
    /* Tree()
     * ======
     * Converts a nested list into a multilevel
     * tree view menu.
     *
     * @Usage: $('.my-menu').tree(options)
     *         or add [data-widget="tree"] to the ul element
     *         Pass any option as data-option="value"
     */
    AppService.prototype.Tree = function () {
        'use strict';
        var DataKey = 'lte.tree';
        var Default = {
            animationSpeed: 500,
            accordion: true,
            followLink: false,
            trigger: '.treeview a'
        };
        var Selector = {
            tree: '.tree',
            treeview: '.treeview',
            treeviewMenu: '.treeview-menu',
            open: '.menu-open, .active',
            li: 'li',
            data: '[data-widget="tree"]',
            active: '.active'
        };
        var ClassName = {
            open: 'menu-open',
            tree: 'tree'
        };
        var Event = {
            collapsed: 'collapsed.tree',
            expanded: 'expanded.tree'
        };
        // Tree Class Definition
        // =====================
        var Tree = function (element, options) {
            this.element = element;
            this.options = options;
            $(this.element).addClass(ClassName.tree);
            $(Selector.treeview + Selector.active, this.element).addClass(ClassName.open);
            this._setUpListeners();
        };
        Tree.prototype.toggle = function (link, event) {
            var treeviewMenu = link.next(Selector.treeviewMenu);
            var parentLi = link.parent();
            var isOpen = parentLi.hasClass(ClassName.open);
            if (!parentLi.is(Selector.treeview)) {
                return;
            }
            if (!this.options.followLink || link.attr('href') === '#') {
                event.preventDefault();
            }
            if (isOpen) {
                this.collapse(treeviewMenu, parentLi);
            }
            else {
                this.expand(treeviewMenu, parentLi);
            }
        };
        Tree.prototype.expand = function (tree, parent) {
            var expandedEvent = $.Event(Event.expanded);
            if (this.options.accordion) {
                var openMenuLi = parent.siblings(Selector.open);
                var openTree = openMenuLi.children(Selector.treeviewMenu);
                this.collapse(openTree, openMenuLi);
            }
            parent.addClass(ClassName.open);
            tree.slideDown(this.options.animationSpeed, function () {
                $(this.element).trigger(expandedEvent);
            }.bind(this));
        };
        Tree.prototype.collapse = function (tree, parentLi) {
            var collapsedEvent = $.Event(Event.collapsed);
            tree.find(Selector.open).removeClass(ClassName.open);
            parentLi.removeClass(ClassName.open);
            tree.slideUp(this.options.animationSpeed, function () {
                tree.find(Selector.open + ' > ' + Selector.treeview).slideUp();
                $(this.element).trigger(collapsedEvent);
            }.bind(this));
        };
        // Private
        Tree.prototype._setUpListeners = function () {
            var that = this;
            $(this.element).on('click', this.options.trigger, function (event) {
                that.toggle($(this), event);
            });
        };
        // Plugin Definition
        // =================
        function Plugin(option) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DataKey);
                if (!data) {
                    var options = $.extend({}, Default, $this.data(), typeof option === 'object' && option);
                    $this.data(DataKey, new Tree($this, options));
                }
            });
        }
        var old = $.fn.tree;
        $.fn.tree = Plugin;
        $.fn.tree.Constructor = Tree;
        // No Conflict Mode
        // ================
        $.fn.tree.noConflict = function () {
            $.fn.tree = old;
            return this;
        };
        // Tree Data API
        // =============
        $(window).on('load', function () {
            $(Selector.data).each(function () {
                Plugin.call($(this));
            });
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/setting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSettingService = (function () {
    function AppSettingService() {
    }
    /**
     * Init
     */
    AppSettingService.prototype.Init = function () {
        /**
         * AdminLTE Demo Menu
         * ------------------
         * You should not use this file in production.
         * This file is for demo purposes only.
         */
        /**
        * Get access to plugins
        */
        $('[data-toggle="control-sidebar"]').controlSidebar();
        $('[data-toggle="push-menu"]').pushMenu();
        this.pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu');
        this.controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar');
        this.layout = $('body').data('lte.layout');
        /**
         * List of all the available skins
         *
         * @type Array
         */
        this.mySkins = [
            'skin-blue',
            'skin-black',
            'skin-red',
            'skin-yellow',
            'skin-purple',
            'skin-green',
            'skin-blue-light',
            'skin-black-light',
            'skin-red-light',
            'skin-yellow-light',
            'skin-purple-light',
            'skin-green-light'
        ];
        // Create the tab button
        var $tabButton = $('<li />', { 'class': 'active' })
            .html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'>\n                    <i class=\"fa fa-wrench\"></i>\n                   </a>");
        // Add the tab button to the right sidebar tabs
        $('[href="#control-sidebar-home-tab"]')
            .parent()
            .before($tabButton);
        this.SetupTempl();
    };
    /**
     * Get a prestored setting
     *
     * @param String name Name of of the setting
     * @returns String The value of the setting | null
     */
    AppSettingService.prototype.GetSetting = function (name) {
        if (typeof (Storage) !== 'undefined') {
            return localStorage.getItem(name);
        }
        else {
            window.alert('Please use a modern browser to properly view this template!');
        }
    };
    /**
     * Store a new settings in the browser
     *
     * @param String name Name of the setting
     * @param String val Value of the setting
     * @returns void
     */
    AppSettingService.prototype.Store = function (name, val) {
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem(name, val);
        }
        else {
            window.alert('Please use a modern browser to properly view this template!');
        }
    };
    /**
     * Toggles layout classes
     *
     * @param String cls the layout class to toggle
     * @returns void
     */
    AppSettingService.prototype.ChangeLayout = function (obj, cls) {
        var that = obj;
        $('body').toggleClass(cls);
        if (that.layout == null) {
            that.layout = $('body').data('lte.layout');
        }
        that.layout.fixSidebar();
        if ($('body').hasClass('fixed') && cls === 'fixed') {
            that.pushMenu.expandOnHover();
            that.layout.activate();
        }
        that.controlSidebar.fix();
    };
    /**
     * Replaces the old skin with the new skin
     * @param String cls the new skin class
     * @returns Boolean false to prevent link's default action
     */
    AppSettingService.prototype.ChangeSkin = function (obj, cls) {
        var that = obj;
        $.each(that.mySkins, function (i) {
            $('body').removeClass(that.mySkins[i]);
        });
        $('body').addClass(cls);
        that.Store('skin', cls);
        return false;
    };
    /**
     * Retrieve default settings and apply them to the template
     *
     * @returns void
     */
    AppSettingService.prototype.SetupTempl = function () {
        var that = this;
        var tmp = that.GetSetting('skin');
        if (tmp && $.inArray(tmp, that.mySkins)) {
            that.ChangeSkin(that, tmp);
        }
        // Add the change skin listener
        $('[data-skin]').on('click', function (e) {
            if ($(this).hasClass('knob')) {
                return;
            }
            e.preventDefault();
            that.ChangeSkin(that, $(this).data('skin'));
        });
        // Add the layout manager
        $('[data-layout]').on('click', function () {
            that.ChangeLayout(that, $(this).data('layout'));
        });
        $('[data-controlsidebar]').on('click', function () {
            that.ChangeLayout(that, $(this).data('controlsidebar'));
            var slide = !that.controlSidebar.options.slide;
            that.controlSidebar.options.slide = slide;
            if (!slide) {
                $('.control-sidebar').removeClass('control-sidebar-open');
            }
        });
        $('[data-sidebarskin="toggle"]').on('click', function () {
            var $sidebar = $('.control-sidebar');
            if ($sidebar.hasClass('control-sidebar-dark')) {
                $sidebar.removeClass('control-sidebar-dark');
                $sidebar.addClass('control-sidebar-light');
            }
            else {
                $sidebar.removeClass('control-sidebar-light');
                $sidebar.addClass('control-sidebar-dark');
            }
        });
        $('[data-enable="expandOnHover"]').on('click', function () {
            $(this).attr('disabled', 'true');
            that.pushMenu.expandOnHover();
            if (!$('body').hasClass('sidebar-collapse')) {
                $('[data-layout="sidebar-collapse"]').click();
            }
        });
        //  Reset options
        if ($('body').hasClass('fixed')) {
            $('[data-layout="fixed"]').attr('checked', 'checked');
        }
        if ($('body').hasClass('layout-boxed')) {
            $('[data-layout="layout-boxed"]').attr('checked', 'checked');
        }
        if ($('body').hasClass('sidebar-collapse')) {
            $('[data-layout="sidebar-collapse"]').attr('checked', 'checked');
        }
    };
    AppSettingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AppSettingService);
    return AppSettingService;
}());



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