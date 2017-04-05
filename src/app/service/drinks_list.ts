import { Injectable }  from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class firstServiceJsonData {
    usersServiceUrl = "https://jsonplaceholder.typicode.com/users";
    postsServiceUrl = "https://jsonplaceholder.typicode.com/posts";

   constructor(private _http: Http) {}

    userService() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return this._http.get(this.usersServiceUrl,{headers:headers}).map( res => res.json() );
    }
    postService() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return this._http.get(this.postsServiceUrl,{headers:headers}).map( res => res.json() );
    }
    

    handleError (error: Response) {
            console.error(error);
            return Observable.throw(error.json().error || ' error');
    }



}