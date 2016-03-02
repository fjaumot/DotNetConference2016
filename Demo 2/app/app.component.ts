import {Component} from 'angular2/core';
import {Product} from './product';

@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/lista.html'
})
export class AppComponent { 
    
    products : Array<Product> = [];
    
    constructor() {
       this.products = [
            new Product(1, 'Huevos'),
            new Product(2, 'Manzanas'),
            new Product(3, 'Plátanos'),
            new Product(4, 'Mostaza')
        ];
    }
    
    addProduct(product: string) {
        this.products.push(new Product(5, product));
    }
  
  doneTyping($event) {
  if($event.which === 13) {
    this.addProduct($event.target.value);
    $event.target.value = null;
  }
}

}