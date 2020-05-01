(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/Articles/article.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Services/Articles/article.service.ts ***!
  \******************************************************/
/*! exports provided: ArticleService, Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ArticleService {
    constructor(http) {
        this.http = http;
        this.url = "/api/Articles";
    }
    getArticles() {
        return this.http.get(this.url);
    }
    getArticlesByID(id) {
        return this.http.get(this.url + "/" + id);
    }
    addArticle(value) {
        return this.http.post(this.url, value);
    }
    updateArticle(value) {
        this.http.put(this.url, value);
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
class Article {
    constructor(id, title, text, imgSource) { }
}


/***/ }),

/***/ "./src/app/Services/images.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/images.service.ts ***!
  \********************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ImagesService {
    constructor() {
        this.images = ["https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg",
            "https://wallpapercave.com/wp/wp2394184.jpg",
            "https://cutewallpaper.org/21/ultra-hd-wallpapers-4k/Cars-3-2017-4K-8K-Wallpapers-HD-Wallpapers-ID-19843.jpg"];
    }
    getImages() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.images);
    }
    addImage(value) {
        this.images.push(value);
    }
}
ImagesService.ɵfac = function ImagesService_Factory(t) { return new (t || ImagesService)(); };
ImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImagesService, factory: ImagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");



class AboutComponent {
    constructor() {
        this.latitude = 51.678418;
        this.longitude = 7.809007;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 2, consts: [[1, "Blog"], [3, "latitude", "longitude"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "agm-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitude)("longitude", ctx.longitude);
    } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"]], styles: [".Blog[_ngcontent-%COMP%] {\n  height: 65vh;\n}\n.Blog[_ngcontent-%COMP%]   agm-map[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxWbGFkaXNsYXZcXHNvdXJjZVxcV2ViU2l0ZVxcV2ViU2l0ZVxcTm92b2RCbG9nXFxOb3ZvZEJsb2dcXENsaWVudEFwcC9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQmxvZ3tcbiAgICBoZWlnaHQ6IDY1dmg7XG4gICAgYWdtLW1hcHtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgIH1cbn1cbiIsIi5CbG9nIHtcbiAgaGVpZ2h0OiA2NXZoO1xufVxuLkJsb2cgYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Articles/article.service */ "./src/app/Services/Articles/article.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AdminPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pls change TITLE before save! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPanelComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pls change TEXT before save! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPanelComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pls change IMGSource before save! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminPanelComponent {
    constructor(articleService, formBuilder) {
        this.articleService = articleService;
        this.formBuilder = formBuilder;
        this.done = false;
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            "Title": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            "Text": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            "imgSource": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    save() {
        console.log(this.myForm.value);
        this.articleService.addArticle(this.myForm.value).subscribe((data) => { this.done = true; }, error => console.log(error));
    }
}
AdminPanelComponent.ɵfac = function AdminPanelComponent_Factory(t) { return new (t || AdminPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AdminPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPanelComponent, selectors: [["app-admin-panel"]], decls: 20, vars: 4, consts: [[1, "Blog", "d-flex-column", "align-self-center", "justify-content-center"], ["novalidate", "", 1, "p-3", 3, "formGroup"], [1, "form-group"], ["type", "text", "required", "", "name", "", "formControlName", "Title", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "text", "required", "", "formControlName", "Text", 1, "form-control"], ["type", "text", "required", "", "formControlName", "imgSource", 1, "form-control"], [1, "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "alert", "alert-danger"]], template: function AdminPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminPanelComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminPanelComponent_div_11_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminPanelComponent_div_16_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPanelComponent_Template_button_click_18_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myForm.controls["Title"].invalid && ctx.myForm.controls["Title"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myForm.controls["Text"].invalid && ctx.myForm.controls["Text"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myForm.controls["imgSource"].invalid && ctx.myForm.controls["imgSource"].touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".Blog[_ngcontent-%COMP%] {\n  height: 65vh;\n  margin: auto;\n  max-width: 1140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFuZWwvQzpcXFVzZXJzXFxWbGFkaXNsYXZcXHNvdXJjZVxcV2ViU2l0ZVxcV2ViU2l0ZVxcTm92b2RCbG9nXFxOb3ZvZEJsb2dcXENsaWVudEFwcC9zcmNcXGFwcFxcYWRtaW4tcGFuZWxcXGFkbWluLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkJsb2d7XG4gICAgaGVpZ2h0OiA2NXZoO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6MTE0MHB4O1xufVxuIiwiLkJsb2cge1xuICBoZWlnaHQ6IDY1dmg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-panel',
                templateUrl: './admin-panel.component.html',
                styleUrls: ['./admin-panel.component.scss']
            }]
    }], function () { return [{ type: _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _content_page_content_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-page/content-page.component */ "./src/app/content-page/content-page.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "./src/app/admin-panel/admin-panel.component.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'content', component: _content_page_content_page_component__WEBPACK_IMPORTED_MODULE_4__["ContentPageComponent"] },
    { path: "content/item/:id", component: _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"] },
    { path: 'adminPanel', component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__["AdminPanelComponent"] },
    { path: '**', redirectTo: '/', pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'ClientApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".carousel-item[_ngcontent-%COMP%] {\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n  position: absolute;\n}\n\n.carousel-item.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxWbGFkaXNsYXZcXHNvdXJjZVxcV2ViU2l0ZVxcV2ViU2l0ZVxcTm92b2RCbG9nXFxOb3ZvZEJsb2dcXENsaWVudEFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjJzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDEuMnM7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0uYWN0aXZle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4iLCIuY2Fyb3VzZWwtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMnMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMS4ycztcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogMTA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _Services_images_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/images.service */ "./src/app/Services/images.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Services/Articles/article.service */ "./src/app/Services/Articles/article.service.ts");
/* harmony import */ var _content_page_content_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./content-page/content-page.component */ "./src/app/content-page/content-page.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "./src/app/admin-panel/admin-panel.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Services_images_service__WEBPACK_IMPORTED_MODULE_6__["ImagesService"], _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_22__["ArticleService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyAHiydBjdhPXBiEZ5QW_Hgx4aXvedHJYnE"
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"],
        _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__["BlogsComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
        _content_page_content_page_component__WEBPACK_IMPORTED_MODULE_23__["ContentPageComponent"],
        _item_item_component__WEBPACK_IMPORTED_MODULE_24__["ItemComponent"],
        _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_25__["AdminPanelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"],
                    _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__["BlogsComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                    _content_page_content_page_component__WEBPACK_IMPORTED_MODULE_23__["ContentPageComponent"],
                    _item_item_component__WEBPACK_IMPORTED_MODULE_24__["ItemComponent"],
                    _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_25__["AdminPanelComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"].forRoot({
                        apiKey: "AIzaSyAHiydBjdhPXBiEZ5QW_Hgx4aXvedHJYnE"
                    })
                ],
                providers: [_Services_images_service__WEBPACK_IMPORTED_MODULE_6__["ImagesService"], _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_22__["ArticleService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blogs/blogs.component.ts":
/*!******************************************!*\
  !*** ./src/app/blogs/blogs.component.ts ***!
  \******************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Articles/article.service */ "./src/app/Services/Articles/article.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["content/item", a1]; };
function BlogsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, article_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", article_r12.imgSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r12.title);
} }
class BlogsComponent {
    constructor(articleService) {
        this.articleService = articleService;
    }
    ngOnInit() {
        this.articleService.getArticles().subscribe((result) => { this.articles = result; console.log(this.articles); });
    }
}
BlogsComponent.ɵfac = function BlogsComponent_Factory(t) { return new (t || BlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"])); };
BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogsComponent, selectors: [["app-blogs"]], decls: 4, vars: 5, consts: [[1, "container-fluid", "m-0", "p-1"], [1, "d-flex", "flex-wrap", "justify-content-center", "p-1", "m-1"], ["class", "Blogs col-md-4 card m-2 p-1", 4, "ngFor", "ngForOf"], [1, "Blogs", "col-md-4", "card", "m-2", "p-1"], [3, "routerLink"], ["alt", "", 1, "MainBlogImage", 3, "src"], [1, "h3", "Title"]], template: function BlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogsComponent_div_2_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx.articles, 0, 6));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.container-fluid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-family: \"Courgette\", cursive;\n}\n.container-fluid[_ngcontent-%COMP%]   .Blogs[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n.container-fluid[_ngcontent-%COMP%]   .Blogs[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transition: 1s;\n}\n.container-fluid[_ngcontent-%COMP%]   .MainBlogImage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZ3MvQzpcXFVzZXJzXFxWbGFkaXNsYXZcXHNvdXJjZVxcV2ViU2l0ZVxcV2ViU2l0ZVxcTm92b2RCbG9nXFxOb3ZvZEJsb2dcXENsaWVudEFwcC9zcmNcXGFwcFxcYmxvZ3NcXGJsb2dzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9ncy9ibG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDQ0o7QURFRTtFQUNFLGlCQUFBO0VBQ0EsaUNBQUE7QUNBSjtBREdFO0VBQ0UsaUJBQUE7QUNESjtBREdJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNETjtBREtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dzL2Jsb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1hcmdpbjogYXV0bztcblxuICBhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAuVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcbiAgfVxuXG4gIC5CbG9ncyB7XG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgIH1cbiAgfVxuXG4gIC5NYWluQmxvZ0ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gIH1cbn1cbiIsIi5jb250YWluZXItZmx1aWQge1xuICBtYXJnaW46IGF1dG87XG59XG4uY29udGFpbmVyLWZsdWlkIGEge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhaW5lci1mbHVpZCAuVGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmdldHRlXCIsIGN1cnNpdmU7XG59XG4uY29udGFpbmVyLWZsdWlkIC5CbG9ncyB7XG4gIG1heC13aWR0aDogMTE0MHB4O1xufVxuLmNvbnRhaW5lci1mbHVpZCAuQmxvZ3M6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuLmNvbnRhaW5lci1mbHVpZCAuTWFpbkJsb2dJbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdmg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blogs',
                templateUrl: './blogs.component.html',
                styleUrls: ['./blogs.component.scss']
            }]
    }], function () { return [{ type: _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/content-page/content-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/content-page/content-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageComponent", function() { return ContentPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Articles/article.service */ "./src/app/Services/Articles/article.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["item", a1]; };
function ContentPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, article_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", article_r1.imgSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.title);
} }
class ContentPageComponent {
    constructor(articlesServise) {
        this.articlesServise = articlesServise;
    }
    ngOnInit() {
        this.articlesServise.getArticles().subscribe((result) => this.articles = result);
    }
}
ContentPageComponent.ɵfac = function ContentPageComponent_Factory(t) { return new (t || ContentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"])); };
ContentPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentPageComponent, selectors: [["app-content-page"]], decls: 3, vars: 1, consts: [[1, "container-fluid", "m-0", "p-1"], [1, "d-flex", "flex-wrap", "justify-content-center", "p-1", "m-1"], ["class", "Blogs  col-md-4 card m-2 p-1", 4, "ngFor", "ngForOf"], [1, "Blogs", "col-md-4", "card", "m-2", "p-1"], [3, "routerLink"], ["alt", "", 1, "MainBlogImage", 3, "src"], [1, "h3"]], template: function ContentPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentPageComponent_div_2_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin: auto;\n  min-height: 70vh;\n}\n.container-fluid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .Blogs[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n.container-fluid[_ngcontent-%COMP%]   .Blogs[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transition: 1s;\n}\n.container-fluid[_ngcontent-%COMP%]   .MainBlogImage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40vh;\n}\n.container-fluid[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-family: \"Courgette\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1wYWdlL0M6XFxVc2Vyc1xcVmxhZGlzbGF2XFxzb3VyY2VcXFdlYlNpdGVcXFdlYlNpdGVcXE5vdm9kQmxvZ1xcTm92b2RCbG9nXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbnRlbnQtcGFnZVxcY29udGVudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250ZW50LXBhZ2UvY29udGVudC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FERUk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0FOO0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FES0U7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50LXBhZ2UvY29udGVudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLWhlaWdodDogNzB2aDtcblxuICBhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAuQmxvZ3Mge1xuICAgIG1heC13aWR0aDogMTE0MHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB9XG4gIH1cblxuICAuTWFpbkJsb2dJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICB9XG5cbiAgLlRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJnZXR0ZScsIGN1cnNpdmU7XG4gIH1cbn1cbiIsIi5jb250YWluZXItZmx1aWQge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG59XG4uY29udGFpbmVyLWZsdWlkIGEge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhaW5lci1mbHVpZCAuQmxvZ3Mge1xuICBtYXgtd2lkdGg6IDExNDBweDtcbn1cbi5jb250YWluZXItZmx1aWQgLkJsb2dzOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2l0aW9uOiAxcztcbn1cbi5jb250YWluZXItZmx1aWQgLk1haW5CbG9nSW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHZoO1xufVxuLmNvbnRhaW5lci1mbHVpZCAuVGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmdldHRlXCIsIGN1cnNpdmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-page',
                templateUrl: './content-page.component.html',
                styleUrls: ['./content-page.component.scss']
            }]
    }], function () { return [{ type: _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 32, vars: 0, consts: [[1, "site-footer"], [1, "container"], [1, "d-flex", "flex-column"], [1, "FlexItem", "p-2"], [1, "text-justify"], [1, "row"], [1, "col-md-8", "col-sm-6", "col-xs-12"], [1, "copyright-text"], ["href", "#"], [1, "col-md-4", "col-sm-6", "col-xs-12"], [1, "social-icons"], ["href", "#", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "#", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "#", 1, "dribbble"], [1, "fa", "fa-dribbble"], ["href", "#", 1, "linkedin"], [1, "fa", "fa-linkedin"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Novod.com Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias non, asperiores labore vel exercitationem enim laboriosam quis inventore eaque similique accusantium cupiditate iure expedita qui! Optio debitis molestiae rerum eveniet..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Copyright \u00A9 2020 All Rights Reserved by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Novod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\na[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #d9d9d9;\n  transition: 0.3s;\n}\n.site-footer[_ngcontent-%COMP%] {\n  background-color: #26272b;\n  padding: 45px 0 20px;\n  font-size: 15px;\n  line-height: 24px;\n  color: #737373;\n}\n.site-footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #bbb;\n  opacity: 0.5;\n}\n.site-footer[_ngcontent-%COMP%]   hr.small[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.site-footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-top: 5px;\n  letter-spacing: 2px;\n}\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #737373;\n}\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3366cc;\n  text-decoration: none;\n}\n.footer-links[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #737373;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3366cc;\n  text-decoration: none;\n}\n.footer-links.inline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.site-footer[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.site-footer[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  margin-left: 6px;\n  margin-right: 0;\n  border-radius: 100%;\n  background-color: #33353d;\n}\n.copyright-text[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 991px) {\n  .site-footer[_ngcontent-%COMP%]   [class^=col-][_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .site-footer[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n\n  .site-footer[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%], .site-footer[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.social-icons[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.social-icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.social-icons[_ngcontent-%COMP%]   li.title[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  text-transform: uppercase;\n  color: #96a2b2;\n  font-weight: 700;\n  font-size: 13px;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #eceeef;\n  color: #818a91;\n  font-size: 16px;\n  display: inline-block;\n  line-height: 44px;\n  width: 44px;\n  height: 44px;\n  text-align: center;\n  margin-right: 8px;\n  border-radius: 100%;\n  transition: all 0.2s linear;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #29aafe;\n}\n.social-icons.size-sm[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 34px;\n  height: 34px;\n  width: 34px;\n  font-size: 14px;\n}\n.social-icons[_ngcontent-%COMP%]   a.facebook[_ngcontent-%COMP%]:hover {\n  background-color: #3b5998;\n}\n.social-icons[_ngcontent-%COMP%]   a.twitter[_ngcontent-%COMP%]:hover {\n  background-color: #00aced;\n}\n.social-icons[_ngcontent-%COMP%]   a.linkedin[_ngcontent-%COMP%]:hover {\n  background-color: #007bb6;\n}\n.social-icons[_ngcontent-%COMP%]   a.dribbble[_ngcontent-%COMP%]:hover {\n  background-color: #ea4c89;\n}\n@media (max-width: 767px) {\n  .social-icons[_ngcontent-%COMP%]   li.title[_ngcontent-%COMP%] {\n    display: block;\n    margin-right: 0;\n    font-weight: 600;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcVmxhZGlzbGF2XFxzb3VyY2VcXFdlYlNpdGVcXFdlYlNpdGVcXE5vdm9kQmxvZ1xcTm92b2RCbG9nXFxDbGllbnRBcHAvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0VSO0FERUE7RUFFRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FERUE7RUFFRSxzQkFBQTtFQUNBLFlBQUE7QUNBRjtBREVBO0VBRUUsY0FBQTtBQ0FGO0FERUE7RUFFRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUY7QURFQTtFQUVFLGNBQUE7QUNBRjtBREVBO0VBRUUsY0FBQTtFQUNBLHFCQUFBO0FDQUY7QURFQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUE7RUFFRSxjQUFBO0FDQUY7QURFQTtFQUVFLGNBQUE7QUNBRjtBREVBO0VBRUUsY0FBQTtFQUNBLHFCQUFBO0FDQUY7QURFQTtFQUVFLHFCQUFBO0FDQUY7QURFQTtFQUVFLGlCQUFBO0FDQUY7QURFQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQUY7QURFQTtFQUVFLFNBQUE7QUNBRjtBREVBO0VBRUU7SUFFRSxtQkFBQTtFQ0RGO0FBQ0Y7QURHQTtFQUVFO0lBRUUsaUJBQUE7RUNIRjs7RURLQTtJQUVFLGtCQUFBO0VDSEY7QUFDRjtBREtBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE1BO0VBRUUscUJBQUE7RUFDQSxrQkFBQTtBQ0pGO0FETUE7RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pGO0FETUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBR0EsMkJBQUE7QUNIRjtBREtBO0VBRUUsV0FBQTtFQUNBLHlCQUFBO0FDSEY7QURLQTtFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSEY7QURLQTtFQUVFLHlCQUFBO0FDSEY7QURLQTtFQUVFLHlCQUFBO0FDSEY7QURLQTtFQUVFLHlCQUFBO0FDSEY7QURLQTtFQUVFLHlCQUFBO0FDSEY7QURLQTtFQUVFO0lBRUUsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgOmhvdmVye1xuICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogI2ZmZiwgJGFtb3VudDogMTUlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB9XG59XG5cbi5zaXRlLWZvb3Rlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMyNjI3MmI7XG4gIHBhZGRpbmc6NDVweCAwIDIwcHg7XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBsaW5lLWhlaWdodDoyNHB4O1xuICBjb2xvcjojNzM3MzczO1xufVxuLnNpdGUtZm9vdGVyIGhyXG57XG4gIGJvcmRlci10b3AtY29sb3I6I2JiYjtcbiAgb3BhY2l0eTowLjVcbn1cbi5zaXRlLWZvb3RlciBoci5zbWFsbFxue1xuICBtYXJnaW46MjBweCAwXG59XG4uc2l0ZS1mb290ZXIgaDZcbntcbiAgY29sb3I6I2ZmZjtcbiAgZm9udC1zaXplOjE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDo1cHg7XG4gIGxldHRlci1zcGFjaW5nOjJweFxufVxuLnNpdGUtZm9vdGVyIGFcbntcbiAgY29sb3I6IzczNzM3Mztcbn1cbi5zaXRlLWZvb3RlciBhOmhvdmVyXG57XG4gIGNvbG9yOiMzMzY2Y2M7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuLmZvb3Rlci1saW5rc1xue1xuICBwYWRkaW5nLWxlZnQ6MDtcbiAgbGlzdC1zdHlsZTpub25lXG59XG4uZm9vdGVyLWxpbmtzIGxpXG57XG4gIGRpc3BsYXk6YmxvY2tcbn1cbi5mb290ZXItbGlua3MgYVxue1xuICBjb2xvcjojNzM3MzczXG59XG4uZm9vdGVyLWxpbmtzIGE6YWN0aXZlLC5mb290ZXItbGlua3MgYTpmb2N1cywuZm9vdGVyLWxpbmtzIGE6aG92ZXJcbntcbiAgY29sb3I6IzMzNjZjYztcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG4uZm9vdGVyLWxpbmtzLmlubGluZSBsaVxue1xuICBkaXNwbGF5OmlubGluZS1ibG9ja1xufVxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnNcbntcbiAgdGV4dC1hbGlnbjpyaWdodFxufVxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMgYVxue1xuICB3aWR0aDo0MHB4O1xuICBoZWlnaHQ6NDBweDtcbiAgbGluZS1oZWlnaHQ6NDBweDtcbiAgbWFyZ2luLWxlZnQ6NnB4O1xuICBtYXJnaW4tcmlnaHQ6MDtcbiAgYm9yZGVyLXJhZGl1czoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzM1M2Rcbn1cbi5jb3B5cmlnaHQtdGV4dFxue1xuICBtYXJnaW46MFxufVxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpXG57XG4gIC5zaXRlLWZvb3RlciBbY2xhc3NePWNvbC1dXG4gIHtcbiAgICBtYXJnaW4tYm90dG9tOjMwcHhcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpXG57XG4gIC5zaXRlLWZvb3RlclxuICB7XG4gICAgcGFkZGluZy1ib3R0b206MFxuICB9XG4gIC5zaXRlLWZvb3RlciAuY29weXJpZ2h0LXRleHQsLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnNcbiAge1xuICAgIHRleHQtYWxpZ246Y2VudGVyXG4gIH1cbn1cbi5zb2NpYWwtaWNvbnNcbntcbiAgcGFkZGluZy1sZWZ0OjA7XG4gIG1hcmdpbi1ib3R0b206MDtcbiAgbGlzdC1zdHlsZTpub25lXG59XG4uc29jaWFsLWljb25zIGxpXG57XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOjRweFxufVxuLnNvY2lhbC1pY29ucyBsaS50aXRsZVxue1xuICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICBjb2xvcjojOTZhMmIyO1xuICBmb250LXdlaWdodDo3MDA7XG4gIGZvbnQtc2l6ZToxM3B4XG59XG4uc29jaWFsLWljb25zIGF7XG4gIGJhY2tncm91bmQtY29sb3I6I2VjZWVlZjtcbiAgY29sb3I6IzgxOGE5MTtcbiAgZm9udC1zaXplOjE2cHg7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDo0NHB4O1xuICB3aWR0aDo0NHB4O1xuICBoZWlnaHQ6NDRweDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDo4cHg7XG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyO1xuICB0cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyXG59XG4uc29jaWFsLWljb25zIGE6YWN0aXZlLC5zb2NpYWwtaWNvbnMgYTpmb2N1cywuc29jaWFsLWljb25zIGE6aG92ZXJcbntcbiAgY29sb3I6I2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjojMjlhYWZlXG59XG4uc29jaWFsLWljb25zLnNpemUtc20gYVxue1xuICBsaW5lLWhlaWdodDozNHB4O1xuICBoZWlnaHQ6MzRweDtcbiAgd2lkdGg6MzRweDtcbiAgZm9udC1zaXplOjE0cHhcbn1cbi5zb2NpYWwtaWNvbnMgYS5mYWNlYm9vazpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OThcbn1cbi5zb2NpYWwtaWNvbnMgYS50d2l0dGVyOmhvdmVyXG57XG4gIGJhY2tncm91bmQtY29sb3I6IzAwYWNlZFxufVxuLnNvY2lhbC1pY29ucyBhLmxpbmtlZGluOmhvdmVyXG57XG4gIGJhY2tncm91bmQtY29sb3I6IzAwN2JiNlxufVxuLnNvY2lhbC1pY29ucyBhLmRyaWJiYmxlOmhvdmVyXG57XG4gIGJhY2tncm91bmQtY29sb3I6I2VhNGM4OVxufVxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpXG57XG4gIC5zb2NpYWwtaWNvbnMgbGkudGl0bGVcbiAge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OjA7XG4gICAgZm9udC13ZWlnaHQ6NjAwXG4gIH1cbn0iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cbmEgOmhvdmVyIHtcbiAgY29sb3I6ICNkOWQ5ZDk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zaXRlLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI3MmI7XG4gIHBhZGRpbmc6IDQ1cHggMCAyMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzczNzM3Mztcbn1cblxuLnNpdGUtZm9vdGVyIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2JiYjtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uc2l0ZS1mb290ZXIgaHIuc21hbGwge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnNpdGUtZm9vdGVyIGg2IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uc2l0ZS1mb290ZXIgYSB7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuXG4uc2l0ZS1mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzM2NmNjO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItbGlua3Mge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5mb290ZXItbGlua3MgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvb3Rlci1saW5rcyBhIHtcbiAgY29sb3I6ICM3MzczNzM7XG59XG5cbi5mb290ZXItbGlua3MgYTphY3RpdmUsIC5mb290ZXItbGlua3MgYTpmb2N1cywgLmZvb3Rlci1saW5rcyBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzY2Y2M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvb3Rlci1saW5rcy5pbmxpbmUgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGEge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNTNkO1xufVxuXG4uY29weXJpZ2h0LXRleHQge1xuICBtYXJnaW46IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2l0ZS1mb290ZXIgW2NsYXNzXj1jb2wtXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaXRlLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cblxuICAuc2l0ZS1mb290ZXIgLmNvcHlyaWdodC10ZXh0LCAuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uc29jaWFsLWljb25zIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc29jaWFsLWljb25zIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkudGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjOTZhMmIyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY7XG4gIGNvbG9yOiAjODE4YTkxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cblxuLnNvY2lhbC1pY29ucyBhOmFjdGl2ZSwgLnNvY2lhbC1pY29ucyBhOmZvY3VzLCAuc29jaWFsLWljb25zIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5YWFmZTtcbn1cblxuLnNvY2lhbC1pY29ucy5zaXplLXNtIGEge1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc29jaWFsLWljb25zIGEuZmFjZWJvb2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4uc29jaWFsLWljb25zIGEudHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFjZWQ7XG59XG5cbi5zb2NpYWwtaWNvbnMgYS5saW5rZWRpbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiYjY7XG59XG5cbi5zb2NpYWwtaWNvbnMgYS5kcmliYmJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTRjODk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc29jaWFsLWljb25zIGxpLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");




class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-blogs");
    } }, directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_1__["SliderComponent"], _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_2__["BlogsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Articles/article.service */ "./src/app/Services/Articles/article.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.item.imgSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.item.text);
} }
class ItemComponent {
    constructor(activateRoute, articleService) {
        this.activateRoute = activateRoute;
        this.articleService = articleService;
    }
    ngOnInit() {
        this.activateRoute.params.subscribe(result => this.id = result["id"]);
        this.articleService.getArticlesByID(this.id).subscribe(result => this.item = result);
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"])); };
ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], decls: 4, vars: 1, consts: [[1, "container-fluid"], [1, "d-flex", "align-content-center", "justify-content-center", "p-2"], [1, "Blogs", "border"], ["class", "align-self-center", 4, "ngIf"], [1, "align-self-center"], ["alt", "", 1, "MainBlogImage", 3, "src"], [1, "Text", "p-3", "d-flex", "flex-column"], [1, "Title", "m-1", "p-1"], [1, "text-justify", "p-1"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemComponent_div_3_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".container-fluid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n}\n.container-fluid[_ngcontent-%COMP%]   .Blogs[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  min-height: 85vh;\n}\n.container-fluid[_ngcontent-%COMP%]   .MainBlogImage[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 50vh;\n  max-height: 51vh;\n}\n.container-fluid[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-family: \"Courgette\", cursive;\n}\n.container-fluid[_ngcontent-%COMP%]   .Text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9DOlxcVXNlcnNcXFZsYWRpc2xhdlxcc291cmNlXFxXZWJTaXRlXFxXZWJTaXRlXFxOb3ZvZEJsb2dcXE5vdm9kQmxvZ1xcQ2xpZW50QXBwL3NyY1xcYXBwXFxpdGVtXFxpdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNESjtBRElFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FES0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hKO0FETUU7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0FDSko7QURPRTtFQUVFLGlCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXItZmx1aWQge1xuICBhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAuQmxvZ3Mge1xuICAgIG1heC13aWR0aDogMTAwMHB4OyAgXG4gICAgbWluLWhlaWdodDogODV2aDtcbiAgfVxuXG4gIC5NYWluQmxvZ0ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIG1heC1oZWlnaHQ6IDUxdmg7XG4gIH1cblxuICAuVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmdldHRlJywgY3Vyc2l2ZTtcbiAgfVxuXG4gIC5UZXh0IHtcbiAgICBcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuXG4iLCIuY29udGFpbmVyLWZsdWlkIGEge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhaW5lci1mbHVpZCAuQmxvZ3Mge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWluLWhlaWdodDogODV2aDtcbn1cbi5jb250YWluZXItZmx1aWQgLk1haW5CbG9nSW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgbWF4LWhlaWdodDogNTF2aDtcbn1cbi5jb250YWluZXItZmx1aWQgLlRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJnZXR0ZVwiLCBjdXJzaXZlO1xufVxuLmNvbnRhaW5lci1mbHVpZCAuVGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _Services_Articles_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














function NavComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Content page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_ng_template_31_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_ng_template_31_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r13.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_ng_template_31_button_0_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r16.isHandset$));
} }
const _c0 = ["*"];
class NavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], ngContentSelectors: _c0, decls: 35, vars: 10, consts: [[1, "sidenav-container"], ["fixedInViewport", "", "position", "end", 1, "sidenav", 3, "mode"], ["drawer", ""], ["mat-list-item", "", "routerLink", ""], ["mat-list-item", "", "routerLink", "/content"], ["mat-list-item", "", "routerLink", "/about"], [1, "navBar"], [1, "w-100", "d-flex", "justify-content-between", "UpToolbar"], [1, "d-flex", "p-2"], ["src", "https://img.icons8.com/material/480/phone--v1.png", 1, "imgPhone"], [1, "icons"], ["src", "https://img.icons8.com/plasticine/2x/facebook-new.png", 1, "iconUptoolbar"], ["src", "https://i.ya-webdesign.com/images/instagram-logo-transparent-background-png-5.png", 1, "iconUptoolbar"], [1, "d-flex", "justify-content-between", "Toolbar", "p-2"], [1, ""], ["href", "#", 1, "h1", "Title"], ["class", "d-flex  p-2", 4, "ngIf", "ngIfElse"], ["MenuForMobile", ""], [1, "list-inline", "align-items-center", "m-0"], [1, "list-inline-item"], ["routerLink", "", 1, "Links"], ["routerLink", "/content", 1, "Links"], ["routerLink", "/about", 1, "Links"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Content page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-sidenav-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+380(93)-519-05-29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-toolbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Novod Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NavComponent_div_29_Template, 11, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavComponent_ng_template_31_Template, 2, 3, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.isHandset$) ? "over" : "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 8, ctx.isHandset$))("ngIfElse", _r15);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  width: 25vh;\n}\n\n.UpToolbar[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1140px;\n}\n\n.UpToolbar[_ngcontent-%COMP%]   .iconUptoolbar[_ngcontent-%COMP%] {\n  max-height: 30px;\n}\n\n.UpToolbar[_ngcontent-%COMP%]   .imgPhone[_ngcontent-%COMP%] {\n  max-height: 20px;\n}\n\n.UpToolbar[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.navBar[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n}\n\n.Toolbar[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 10vh;\n  max-width: 1140px;\n  background-color: #e0e0e0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.Title[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: \"Lobster\", cursive;\n}\n\nli[_ngcontent-%COMP%]   .Links[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 1.5rem;\n  font-family: \"Lobster\", cursive;\n}\n\nli[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #006b99;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcVmxhZGlzbGF2XFxzb3VyY2VcXFdlYlNpdGVcXFdlYlNpdGVcXE5vdm9kQmxvZ1xcTm92b2RCbG9nXFxDbGllbnRBcHAvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUU7RUFDRSxnQkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFTTtFQUNJLFlBQUE7QUNBVjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsK0JBQUE7QUNERjs7QURJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDREo7O0FESUU7RUFDRSxjQUFBO0FDRko7O0FET0k7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XG4gIHdpZHRoOiAyNXZoO1xufVxuLlVwVG9vbGJhciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDExNDBweDtcblxuICAuaWNvblVwdG9vbGJhciB7XG4gICAgbWF4LWhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5pbWdQaG9uZSB7XG4gICAgbWF4LWhlaWdodDogMjBweDtcbiAgfVxuICAuaWNvbnN7XHJcbiAgICAgIDpob3ZlcntcclxuICAgICAgICAgIG9wYWNpdHk6MC44O1xyXG4gICAgICB9XHJcbiAgfVxufVxuLm5hdkJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG4uVG9vbGJhciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwdmg7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuLlRpdGxle1xuICBjb2xvciA6IzAwMDtcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJyAsIGN1cnNpdmU7XG59XG5saSB7XG4gIC5MaW5rcyB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICMwMDZiOTk7XG4gIH1cbn1cbi5zaWRlbmF2IHtcbiAgLm1hdC10b29sYmFyIHtcbiAgICAubWF0LXByaW1hcnkge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICB9XG59XG5cbiIsIi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI1dmg7XG59XG5cbi5VcFRvb2xiYXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG59XG4uVXBUb29sYmFyIC5pY29uVXB0b29sYmFyIHtcbiAgbWF4LWhlaWdodDogMzBweDtcbn1cbi5VcFRvb2xiYXIgLmltZ1Bob25lIHtcbiAgbWF4LWhlaWdodDogMjBweDtcbn1cbi5VcFRvb2xiYXIgLmljb25zIDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLm5hdkJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cbi5Ub29sYmFyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTB2aDtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5UaXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIGN1cnNpdmU7XG59XG5cbmxpIC5MaW5rcyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBjdXJzaXZlO1xufVxubGkgOmhvdmVyIHtcbiAgY29sb3I6ICMwMDZiOTk7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciAubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Services_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/images.service */ "./src/app/Services/images.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SliderComponent_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SliderComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SliderComponent_1_ng_template_0_Template, 4, 1, "ng-template", 2);
} }
class SliderComponent {
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    ngOnInit() {
        this.imagesService.getImages().subscribe(result => this.images = result);
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 2, vars: 2, consts: [[1, "containerSlider", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", "", "class", "ContainerForDivs carousel-item"], [1, "containerForImage"], ["alt", "slide...", 1, "imageSlider", 3, "src"], [1, "carousel-caption"], [1, "d-flex", "justify-content-center"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SliderComponent_1_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 4000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]], styles: [".containerSlider[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.containerSlider[_ngcontent-%COMP%]   .imageSlider[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVyL0M6XFxVc2Vyc1xcVmxhZGlzbGF2XFxzb3VyY2VcXFdlYlNpdGVcXFdlYlNpdGVcXE5vdm9kQmxvZ1xcTm92b2RCbG9nXFxDbGllbnRBcHAvc3JjXFxhcHBcXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJTbGlkZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5pbWFnZVNsaWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogODV2aDtcbiAgfVxuXG59XG4iLCIuY29udGFpbmVyU2xpZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXJTbGlkZXIgLmltYWdlU2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDg1dmg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.scss']
            }]
    }], function () { return [{ type: _Services_images_service__WEBPACK_IMPORTED_MODULE_1__["ImagesService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
setTimeout(() => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
}, 1500);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vladislav\source\WebSite\WebSite\NovodBlog\NovodBlog\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map