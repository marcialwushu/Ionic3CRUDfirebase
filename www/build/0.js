webpackJsonp([0],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.contact = this.navParams.data.contact || {};
        this.createForm();
        this.setupPageTitle();
    }
    ContactPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.contact ? 'Alterando contato' : 'Novo Contato';
    };
    ContactPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.contact.key],
            name: [this.contact.name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            tel: [this.contact.tel, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    ContactPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o contato', duration: 3000 }).present();
                console.log(e);
            });
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\carlosjunior\Documents\Workspace\ionic\crudfirebase\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.name.valid && (form.controls.name.dirty || form.controls.name.touched)" color="danger">\n      <div [hidden]="!form.controls.name.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Telefone</ion-label>\n        <ion-input type="tel" formControlName="tel"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="!form.controls.tel.valid && (form.controls.tel.dirty || form.controls.tel.touched)" color="danger">\n        <div [hidden]="!form.controls.tel.errors.required">\n          O campo é obrigatório\n        </div>\n      </ion-item>\n\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\carlosjunior\Documents\Workspace\ionic\crudfirebase\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=0.js.map