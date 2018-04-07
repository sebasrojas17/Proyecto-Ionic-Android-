import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { APP_CONFIG } from '../../config/app-config';

@Injectable()
export class PostService {
  constructor( public httpClt: HttpClient){}

  getAllPost(): Observable<any>{
    return this.httpClt.get(`${APP_CONFIG.API_ENDPOINT}/posts`)
    .map(res => {
      console.log("POST ", res);
      return res;
    })
    .catch(err => {
      return Observable.throw(err);
    })
  }

  newPost(newPost):Observable<any>{
    return this.httpClt.post(`${APP_CONFIG.API_ENDPOINT}/posts`, newPost)
    .map(res => {
      return res;
    })
  }
}
