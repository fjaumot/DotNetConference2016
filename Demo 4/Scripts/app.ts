import {Component} from 'angular2/core';
import {Api} from './api';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Product} from './product';


@Component({
    selector: 'cou',
    // template: `
    //     <li *ngFor="#item of products">
    //         <span>{{item.Name}}</span> 
    //     </li>
    // `,
    templateUrl: './list.html',
    providers: [Api, HTTP_PROVIDERS]
})

export class AppComponent
{
    api: Api;
    
    products :Array<Product> = [];
    
    constructor(api: Api) {
        
        this.api = api;
        console.log(this.api);
        
        this.api.getProducts().then(
            (success) => {
               console.log(success);
               
               var d = <Array<any>>success;
               
               for(var i=0;i<d.length;i++){
                    let newProduct:Product = new Product(d[i].ProductId, d[i].Name)
                    this.products.push (newProduct);
                }
            },
            (error) => {
                console.log(error);
            }
        )
    }
}