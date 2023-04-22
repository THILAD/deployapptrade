

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ServicesService  } from "./base-service.service";
@Injectable({
  providedIn: 'root'
})
export class AuthService extends ServicesService {
  public url: string = this.getBaseUrl();
  public token = '';

  login(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.post(this.url + '/auth/login', param,{headers:header});
  }
}