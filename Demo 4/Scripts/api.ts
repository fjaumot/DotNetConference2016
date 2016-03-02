import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class Api{
    
    private http:Http;
    private url: string = "api/product";
    private headers:Headers = new Headers;
    
    constructor(http:Http){
        this.http = http;
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    
    getProducts(){
        return new Promise((resolve, reject) => {
           
           this.http.get(this.url).subscribe(
               res => {
                   resolve(res.json());
               },
               error => {
                   reject(error);
               }
           )
            
        });
    }
}