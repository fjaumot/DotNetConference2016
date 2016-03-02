System.register(['angular2/core', './product'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.products = [];
                    this.products = [
                        new product_1.Product(1, 'Huevos'),
                        new product_1.Product(2, 'Manzanas'),
                        new product_1.Product(3, 'Plátanos'),
                        new product_1.Product(4, 'Mostaza')
                    ];
                }
                AppComponent.prototype.addProduct = function (product) {
                    this.products.push(new product_1.Product(5, product));
                };
                AppComponent.prototype.doneTyping = function ($event) {
                    if ($event.which === 13) {
                        this.addProduct($event.target.value);
                        $event.target.value = null;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/partials/lista.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map