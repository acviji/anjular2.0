import { Injectable }  from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class firstServiceJsonData {
    firstServiceUrl = "https://jsonplaceholder.typicode.com/users";

   constructor(private _http: Http) {}

    firstService() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return this._http.get(this.firstServiceUrl,{headers:headers}).map( res => res.json() );
    }
    

    handleError (error: Response) {
            console.error(error);
            return Observable.throw(error.json().error || ' error');
    }



}