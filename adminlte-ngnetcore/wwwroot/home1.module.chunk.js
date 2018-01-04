webpackJsonp(["home1.module"],{

/***/ "../../../../../src/app/pages/dashboard/home1/home1.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Content Header (Page header) -->\r\n<section class=\"content-header\">\r\n    <h1>\r\n        Dashboard\r\n        <small>Control panel</small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n        <li class=\"active\">Dashboard</li>\r\n    </ol>\r\n</section>\r\n\r\n<!-- Main content -->\r\n<section class=\"content\">\r\n    <!-- Small boxes (Stat box) -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 col-xs-6\">\r\n            <!-- small box -->\r\n            <div class=\"small-box bg-aqua\">\r\n                <div class=\"inner\">\r\n                    <h3>150</h3>\r\n\r\n                    <p>New Orders</p>\r\n                </div>\r\n                <div class=\"icon\">\r\n                    <i class=\"ion ion-ios-cart\"></i>\r\n                </div>\r\n                <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n            </div>\r\n        </div>\r\n        <!-- ./col -->\r\n        <div class=\"col-lg-3 col-xs-6\">\r\n            <!-- small box -->\r\n            <div class=\"small-box bg-green\">\r\n                <div class=\"inner\">\r\n                    <h3>53<sup style=\"font-size: 20px\">%</sup></h3>\r\n\r\n                    <p>Bounce Rate</p>\r\n                </div>\r\n                <div class=\"icon\">\r\n                    <i class=\"icon ion-ios-barcode\"></i>\r\n                </div>\r\n                <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n            </div>\r\n        </div>\r\n        <!-- ./col -->\r\n        <div class=\"col-lg-3 col-xs-6\">\r\n            <!-- small box -->\r\n            <div class=\"small-box bg-yellow\">\r\n                <div class=\"inner\">\r\n                    <h3>44</h3>\r\n\r\n                    <p>User Registrations</p>\r\n                </div>\r\n                <div class=\"icon\">\r\n                    <i class=\"icon ion-md-person-add\"></i>\r\n                </div>\r\n                <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n            </div>\r\n        </div>\r\n        <!-- ./col -->\r\n        <div class=\"col-lg-3 col-xs-6\">\r\n            <!-- small box -->\r\n            <div class=\"small-box bg-red\">\r\n                <div class=\"inner\">\r\n                    <h3>65</h3>\r\n\r\n                    <p>Unique Visitors</p>\r\n                </div>\r\n                <div class=\"icon\">\r\n                    <i class=\"icon ion-md-pie\"></i>\r\n                </div>\r\n                <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n            </div>\r\n        </div>\r\n        <!-- ./col -->\r\n    </div>\r\n    <!-- /.row -->\r\n    <!-- Main row -->\r\n    <div class=\"row\">\r\n        <!-- Left col -->\r\n        <section class=\"col-lg-7 connectedSortable\">\r\n            <!-- Custom tabs (Charts with tabs)-->\r\n            <div class=\"nav-tabs-custom\">\r\n                <!-- Tabs within a box -->\r\n                <ul class=\"nav nav-tabs pull-right\">\r\n                    <li class=\"active\"><a href=\"#revenue-chart\" data-toggle=\"tab\">Area</a></li>\r\n                    <li><a href=\"#sales-chart\" data-toggle=\"tab\">Donut</a></li>\r\n                    <li class=\"pull-left header\"><i class=\"fa fa-inbox\"></i> Sales</li>\r\n                </ul>\r\n                <div class=\"tab-content no-padding\">\r\n                    <!-- Morris chart - Sales -->\r\n                    <div class=\"chart tab-pane active\" id=\"revenue-chart\" style=\"position: relative; height: 300px;\"></div>\r\n                    <div class=\"chart tab-pane\" id=\"sales-chart\" style=\"position: relative; height: 300px;\"></div>\r\n                </div>\r\n            </div>\r\n            <!-- /.nav-tabs-custom -->\r\n\r\n            <!-- Chat box -->\r\n            <div class=\"box box-success\">\r\n                <div class=\"box-header\">\r\n                    <i class=\"fa fa-comments-o\"></i>\r\n\r\n                    <h3 class=\"box-title\">Chat</h3>\r\n\r\n                    <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"Status\">\r\n                        <div class=\"btn-group\" data-toggle=\"btn-toggle\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-sm active\"><i class=\"fa fa-square text-green\"></i>\r\n              </button>\r\n                            <button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-square text-red\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"box-body chat\" id=\"chat-box\">\r\n                    <!-- chat item -->\r\n                    <div class=\"item\">\r\n                        <img src=\"assets/img/user4-128x128.jpg\" alt=\"user image\" class=\"online\">\r\n\r\n                        <p class=\"message\">\r\n                            <a href=\"#\" class=\"name\">\r\n                                <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 2:15</small> Mike Doe\r\n                            </a>\r\n                            I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market\r\n                        </p>\r\n                        <div class=\"attachment\">\r\n                            <h4>Attachments:</h4>\r\n\r\n                            <p class=\"filename\">\r\n                                Theme-thumbnail-image.jpg\r\n                            </p>\r\n\r\n                            <div class=\"pull-right\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm btn-flat\">Open</button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.attachment -->\r\n                    </div>\r\n                    <!-- /.item -->\r\n                    <!-- chat item -->\r\n                    <div class=\"item\">\r\n                        <img src=\"assets/img/user3-128x128.jpg\" alt=\"user image\" class=\"offline\">\r\n\r\n                        <p class=\"message\">\r\n                            <a href=\"#\" class=\"name\">\r\n                                <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:15</small> Alexander Pierce\r\n                            </a>\r\n                            I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market\r\n                        </p>\r\n                    </div>\r\n                    <!-- /.item -->\r\n                    <!-- chat item -->\r\n                    <div class=\"item\">\r\n                        <img src=\"assets/img/user2-160x160.jpg\" alt=\"user image\" class=\"offline\">\r\n\r\n                        <p class=\"message\">\r\n                            <a href=\"#\" class=\"name\">\r\n                                <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:30</small> Susan Doe\r\n                            </a>\r\n                            I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market\r\n                        </p>\r\n                    </div>\r\n                    <!-- /.item -->\r\n                </div>\r\n                <!-- /.chat -->\r\n                <div class=\"box-footer\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" placeholder=\"Type message...\">\r\n\r\n                        <div class=\"input-group-btn\">\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /.box (chat box) -->\r\n\r\n            <!-- TO DO List -->\r\n            <div class=\"box box-primary\">\r\n                <div class=\"box-header\">\r\n                    <i class=\"ion ion-clipboard\"></i>\r\n\r\n                    <h3 class=\"box-title\">To Do List</h3>\r\n\r\n                    <div class=\"box-tools pull-right\">\r\n                        <ul class=\"pagination pagination-sm inline\">\r\n                            <li><a href=\"#\">&laquo;</a></li>\r\n                            <li><a href=\"#\">1</a></li>\r\n                            <li><a href=\"#\">2</a></li>\r\n                            <li><a href=\"#\">3</a></li>\r\n                            <li><a href=\"#\">&raquo;</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <!-- /.box-header -->\r\n                <div class=\"box-body\">\r\n                    <!-- See dist/js/pages/dashboard.js to activate the todoList plugin -->\r\n                    <ul class=\"todo-list\">\r\n                        <li>\r\n                            <!-- drag handle -->\r\n                            <span class=\"handle\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </span>\r\n                            <!-- checkbox -->\r\n                            <input type=\"checkbox\" value=\"\">\r\n                            <!-- todo text -->\r\n                            <span class=\"text\">Design a nice theme</span>\r\n                            <!-- Emphasis label -->\r\n                            <small class=\"label label-danger\"><i class=\"fa fa-clock-o\"></i> 2 mins</small>\r\n                            <!-- General tools such as edit or delete-->\r\n                            <div class=\"tools\">\r\n                                <i class=\"fa fa-edit\"></i>\r\n                                <i class=\"fa fa-trash-o\"></i>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"handle\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </span>\r\n                            <input type=\"checkbox\" value=\"\">\r\n                            <span class=\"text\">Make the theme responsive</span>\r\n                            <small class=\"label label-info\"><i class=\"fa fa-clock-o\"></i> 4 hours</small>\r\n                            <div class=\"tools\">\r\n                                <i class=\"fa fa-edit\"></i>\r\n                                <i class=\"fa fa-trash-o\"></i>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"handle\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </span>\r\n                            <input type=\"checkbox\" value=\"\">\r\n                            <span class=\"text\">Let theme shine like a star</span>\r\n                            <small class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> 1 day</small>\r\n                            <div class=\"tools\">\r\n                                <i class=\"fa fa-edit\"></i>\r\n                                <i class=\"fa fa-trash-o\"></i>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"handle\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </span>\r\n                            <input type=\"checkbox\" value=\"\">\r\n                            <span class=\"text\">Let theme shine like a star</span>\r\n                            <small class=\"label label-success\"><i class=\"fa fa-clock-o\"></i> 3 days</small>\r\n                            <div class=\"tools\">\r\n                                <i class=\"fa fa-edit\"></i>\r\n                                <i class=\"fa fa-trash-o\"></i>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"handle\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </span>\r\n                            <input type=\"checkbox\" value=\"\">\r\n                            <span class=\"text\">Check your messages and notifications</span>\r\n                            <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1 week</small>\r\n                            <div class=\"tools\">\r\n                                <i class=\"fa fa-edit\"></i>\r\n                                <i class=\"fa fa-trash-o\"></i>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"handle\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </span>\r\n                            <input type=\"checkbox\" value=\"\">\r\n                            <span class=\"text\">Let theme shine like a star</span>\r\n                            <small class=\"label label-default\"><i class=\"fa fa-clock-o\"></i> 1 month</small>\r\n                            <div class=\"tools\">\r\n                                <i class=\"fa fa-edit\"></i>\r\n                                <i class=\"fa fa-trash-o\"></i>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- /.box-body -->\r\n                <div class=\"box-footer clearfix no-border\">\r\n                    <button type=\"button\" class=\"btn btn-default pull-right\"><i class=\"fa fa-plus\"></i> Add item</button>\r\n                </div>\r\n            </div>\r\n            <!-- /.box -->\r\n\r\n            <!-- quick email widget -->\r\n            <div class=\"box box-info\">\r\n                <div class=\"box-header\">\r\n                    <i class=\"fa fa-envelope\"></i>\r\n\r\n                    <h3 class=\"box-title\">Quick Email</h3>\r\n                    <!-- tools box -->\r\n                    <div class=\"pull-right box-tools\">\r\n                        <button type=\"button\" class=\"btn btn-info btn-sm\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\r\n              <i class=\"fa fa-times\"></i></button>\r\n                    </div>\r\n                    <!-- /. tools -->\r\n                </div>\r\n                <div class=\"box-body\">\r\n                    <form action=\"#\" method=\"post\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"email\" class=\"form-control\" name=\"emailto\" placeholder=\"Email to:\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\">\r\n                        </div>\r\n                        <div>\r\n                            <textarea class=\"textarea\" placeholder=\"Message\" style=\"width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"box-footer clearfix\">\r\n                    <button type=\"button\" class=\"pull-right btn btn-default\" id=\"sendEmail\">Send\r\n            <i class=\"fa fa-arrow-circle-right\"></i></button>\r\n                </div>\r\n            </div>\r\n\r\n        </section>\r\n        <!-- /.Left col -->\r\n        <!-- right col (We are only adding the ID to make the widgets sortable)-->\r\n        <section class=\"col-lg-5 connectedSortable\">\r\n\r\n            <!-- Map box -->\r\n            <div class=\"box box-solid bg-light-blue-gradient\">\r\n                <div class=\"box-header\">\r\n                    <!-- tools box -->\r\n                    <div class=\"pull-right box-tools\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm daterange pull-right\" data-toggle=\"tooltip\" title=\"Date range\">\r\n              <i class=\"fa fa-calendar\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\" style=\"margin-right: 5px;\">\r\n              <i class=\"fa fa-minus\"></i></button>\r\n                    </div>\r\n                    <!-- /. tools -->\r\n\r\n                    <i class=\"fa fa-map-marker\"></i>\r\n\r\n                    <h3 class=\"box-title\">\r\n                        Visitors\r\n                    </h3>\r\n                </div>\r\n                <div class=\"box-body\">\r\n                    <div id=\"world-map\" style=\"height: 250px; width: 100%;\"></div>\r\n                </div>\r\n                <!-- /.box-body-->\r\n                <div class=\"box-footer no-border\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                            <div id=\"sparkline-1\"></div>\r\n                            <div class=\"knob-label\">Visitors</div>\r\n                        </div>\r\n                        <!-- ./col -->\r\n                        <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                            <div id=\"sparkline-2\"></div>\r\n                            <div class=\"knob-label\">Online</div>\r\n                        </div>\r\n                        <!-- ./col -->\r\n                        <div class=\"col-xs-4 text-center\">\r\n                            <div id=\"sparkline-3\"></div>\r\n                            <div class=\"knob-label\">Exists</div>\r\n                        </div>\r\n                        <!-- ./col -->\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div>\r\n            </div>\r\n            <!-- /.box -->\r\n\r\n            <!-- solid sales graph -->\r\n            <div class=\"box box-solid bg-teal-gradient\">\r\n                <div class=\"box-header\">\r\n                    <i class=\"fa fa-th\"></i>\r\n\r\n                    <h3 class=\"box-title\">Sales Graph</h3>\r\n\r\n                    <div class=\"box-tools pull-right\">\r\n                        <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n            </button>\r\n                        <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\r\n            </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"box-body border-radius-none\">\r\n                    <div class=\"chart\" id=\"line-chart\" style=\"height: 250px;\"></div>\r\n                </div>\r\n                <!-- /.box-body -->\r\n                <div class=\"box-footer no-border\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                            <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"20\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\r\n\r\n                            <div class=\"knob-label\">Mail-Orders</div>\r\n                        </div>\r\n                        <!-- ./col -->\r\n                        <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\r\n                            <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"50\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\r\n\r\n                            <div class=\"knob-label\">Online</div>\r\n                        </div>\r\n                        <!-- ./col -->\r\n                        <div class=\"col-xs-4 text-center\">\r\n                            <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"30\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\r\n\r\n                            <div class=\"knob-label\">In-Store</div>\r\n                        </div>\r\n                        <!-- ./col -->\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div>\r\n                <!-- /.box-footer -->\r\n            </div>\r\n            <!-- /.box -->\r\n\r\n            <!-- Calendar -->\r\n            <div class=\"box box-solid bg-green-gradient\">\r\n                <div class=\"box-header\">\r\n                    <i class=\"fa fa-calendar\"></i>\r\n\r\n                    <h3 class=\"box-title\">Calendar</h3>\r\n                    <!-- tools box -->\r\n                    <div class=\"pull-right box-tools\">\r\n                        <!-- button with a dropdown -->\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-success btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-bars\"></i></button>\r\n                            <ul class=\"dropdown-menu pull-right\" role=\"menu\">\r\n                                <li><a href=\"#\">Add new event</a></li>\r\n                                <li><a href=\"#\">Clear events</a></li>\r\n                                <li class=\"divider\"></li>\r\n                                <li><a href=\"#\">View calendar</a></li>\r\n                            </ul>\r\n                        </div>\r\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n            </button>\r\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\r\n            </button>\r\n                    </div>\r\n                    <!-- /. tools -->\r\n                </div>\r\n                <!-- /.box-header -->\r\n                <div class=\"box-body no-padding\">\r\n                    <!--The calendar -->\r\n                    <div id=\"calendar\" style=\"width: 100%\"></div>\r\n                </div>\r\n                <!-- /.box-body -->\r\n                <div class=\"box-footer text-black\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <!-- Progress bars -->\r\n                            <div class=\"clearfix\">\r\n                                <span class=\"pull-left\">Task #1</span>\r\n                                <small class=\"pull-right\">90%</small>\r\n                            </div>\r\n                            <div class=\"progress xs\">\r\n                                <div class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\r\n                            </div>\r\n\r\n                            <div class=\"clearfix\">\r\n                                <span class=\"pull-left\">Task #2</span>\r\n                                <small class=\"pull-right\">70%</small>\r\n                            </div>\r\n                            <div class=\"progress xs\">\r\n                                <div class=\"progress-bar progress-bar-green\" style=\"width: 70%;\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.col -->\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"clearfix\">\r\n                                <span class=\"pull-left\">Task #3</span>\r\n                                <small class=\"pull-right\">60%</small>\r\n                            </div>\r\n                            <div class=\"progress xs\">\r\n                                <div class=\"progress-bar progress-bar-green\" style=\"width: 60%;\"></div>\r\n                            </div>\r\n\r\n                            <div class=\"clearfix\">\r\n                                <span class=\"pull-left\">Task #4</span>\r\n                                <small class=\"pull-right\">40%</small>\r\n                            </div>\r\n                            <div class=\"progress xs\">\r\n                                <div class=\"progress-bar progress-bar-green\" style=\"width: 40%;\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- /.col -->\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div>\r\n            </div>\r\n            <!-- /.box -->\r\n\r\n        </section>\r\n        <!-- right col -->\r\n    </div>\r\n    <!-- /.row (main row) -->\r\n\r\n</section>\r\n<!-- /.content -->"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/home1/home1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home1_service__ = __webpack_require__("../../../../../src/app/pages/dashboard/home1/home1.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Home1Component = (function () {
    function Home1Component(home1Svc) {
        this.home1Svc = home1Svc;
    }
    Home1Component.prototype.ngAfterViewInit = function () {
        this.home1Svc.Init();
    };
    Home1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'adminlte-home1',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/home1/home1.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__home1_service__["a" /* Home1Service */]])
    ], Home1Component);
    return Home1Component;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/home1/home1.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1Module", function() { return Home1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home1_service__ = __webpack_require__("../../../../../src/app/pages/dashboard/home1/home1.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home1_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/home1/home1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Home1Module = (function () {
    function Home1Module() {
    }
    Home1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home1_component__["a" /* Home1Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([{ path: '', component: __WEBPACK_IMPORTED_MODULE_3__home1_component__["a" /* Home1Component */] }])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__home1_component__["a" /* Home1Component */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__home1_service__["a" /* Home1Service */]
            ]
        })
    ], Home1Module);
    return Home1Module;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/home1/home1.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Home1Service = (function () {
    function Home1Service() {
    }
    /**
     * Init
     */
    Home1Service.prototype.Init = function () {
        /*
        * Author: Abdullah A Almsaeed
        * Date: 4 Jan 2014
        * Description:
        *      This is a demo file used only for the main dashboard (index.html)
        **/
        // Resolve conflict in jQuery UI tooltip with Bootstrap tooltip
        $.widget.bridge('uibutton', $.ui.button);
        // Make the dashboard widgets sortable Using jquery UI
        $('.connectedSortable').sortable({
            placeholder: 'sort-highlight',
            connectWith: '.connectedSortable',
            handle: '.box-header, .nav-tabs',
            forcePlaceholderSize: true,
            zIndex: 999999
        });
        $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');
        // jQuery UI sortable for the todo list
        $('.todo-list').sortable({
            placeholder: 'sort-highlight',
            handle: '.handle',
            forcePlaceholderSize: true,
            zIndex: 999999
        });
        // bootstrap WYSIHTML5 - text editor
        $('.textarea').wysihtml5();
        $('.daterange').daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            startDate: moment().subtract(29, 'days'),
            endDate: moment()
        }, function (start, end) {
            window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });
        /* jQueryKnob */
        $('.knob').knob();
        // jvectormap data
        var visitorsData = {
            US: 398,
            SA: 400,
            CA: 1000,
            DE: 500,
            FR: 760,
            CN: 300,
            AU: 700,
            BR: 600,
            IN: 800,
            GB: 320,
            RU: 3000 // Russia
        };
        // World map by jvectormap
        $('#world-map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    'fill-opacity': 1,
                    stroke: 'none',
                    'stroke-width': 0,
                    'stroke-opacity': 1
                }
            },
            series: {
                regions: [{
                        values: visitorsData,
                        scale: ['#92c1dc', '#ebf4f9'],
                        normalizeFunction: 'polynomial'
                    }]
            },
            onRegionLabelShow: function (e, el, code) {
                if (typeof visitorsData[code] !== 'undefined') {
                    el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
                }
            }
        });
        // Sparkline charts
        var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
        $('#sparkline-1').sparkline(myvalues, {
            type: 'line',
            lineColor: '#92c1dc',
            fillColor: '#ebf4f9',
            height: '50',
            width: '80'
        });
        myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
        $('#sparkline-2').sparkline(myvalues, {
            type: 'line',
            lineColor: '#92c1dc',
            fillColor: '#ebf4f9',
            height: '50',
            width: '80'
        });
        myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
        $('#sparkline-3').sparkline(myvalues, {
            type: 'line',
            lineColor: '#92c1dc',
            fillColor: '#ebf4f9',
            height: '50',
            width: '80'
        });
        // The Calender
        $('#calendar').datepicker();
        // SLIMSCROLL FOR CHAT WIDGET
        $('#chat-box').slimScroll({
            height: '250px'
        });
        /* Morris.js Charts */
        // Sales chart
        var area = new Morris.Area({
            element: 'revenue-chart',
            resize: true,
            data: [
                { y: '2011 Q1', item1: 2666, item2: 2666 },
                { y: '2011 Q2', item1: 2778, item2: 2294 },
                { y: '2011 Q3', item1: 4912, item2: 1969 },
                { y: '2011 Q4', item1: 3767, item2: 3597 },
                { y: '2012 Q1', item1: 6810, item2: 1914 },
                { y: '2012 Q2', item1: 5670, item2: 4293 },
                { y: '2012 Q3', item1: 4820, item2: 3795 },
                { y: '2012 Q4', item1: 15073, item2: 5967 },
                { y: '2013 Q1', item1: 10687, item2: 4460 },
                { y: '2013 Q2', item1: 8432, item2: 5713 }
            ],
            xkey: 'y',
            ykeys: ['item1', 'item2'],
            labels: ['Item 1', 'Item 2'],
            lineColors: ['#a0d0e0', '#3c8dbc'],
            hideHover: 'auto'
        });
        var line = new Morris.Line({
            element: 'line-chart',
            resize: true,
            data: [
                { y: '2011 Q1', item1: 2666 },
                { y: '2011 Q2', item1: 2778 },
                { y: '2011 Q3', item1: 4912 },
                { y: '2011 Q4', item1: 3767 },
                { y: '2012 Q1', item1: 6810 },
                { y: '2012 Q2', item1: 5670 },
                { y: '2012 Q3', item1: 4820 },
                { y: '2012 Q4', item1: 15073 },
                { y: '2013 Q1', item1: 10687 },
                { y: '2013 Q2', item1: 8432 }
            ],
            xkey: 'y',
            ykeys: ['item1'],
            labels: ['Item 1'],
            lineColors: ['#efefef'],
            lineWidth: 2,
            hideHover: 'auto',
            gridTextColor: '#fff',
            gridStrokeWidth: 0.4,
            pointSize: 4,
            pointStrokeColors: ['#efefef'],
            gridLineColor: '#efefef',
            gridTextFamily: 'Open Sans',
            gridTextSize: 10
        });
        // Donut Chart
        var donut = new Morris.Donut({
            element: 'sales-chart',
            resize: true,
            colors: ['#3c8dbc', '#f56954', '#00a65a'],
            data: [
                { label: 'Download Sales', value: 12 },
                { label: 'In-Store Sales', value: 30 },
                { label: 'Mail-Order Sales', value: 20 }
            ],
            hideHover: 'auto'
        });
        // Fix for charts under tabs
        $('.box ul.nav a').on('shown.bs.tab', function () {
            area.redraw();
            donut.redraw();
            line.redraw();
        });
        /* The todo list plugin */
        $('.todo-list').todoList({
            onCheck: function () {
                window.console.log($(this), 'The element has been checked');
            },
            onUnCheck: function () {
                window.console.log($(this), 'The element has been unchecked');
            }
        });
        $('[data-toggle="tooltip"]').tooltip();
    };
    Home1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Home1Service);
    return Home1Service;
}());



/***/ })

});
//# sourceMappingURL=home1.module.chunk.js.map