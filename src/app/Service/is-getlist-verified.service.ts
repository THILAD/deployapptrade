import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VerifiedModel } from '../model/verifiedModel';
import {ServicesService  } from "./base-service.service";

@Injectable({
  providedIn: 'root'
})
export class IsGetlistVerifiedService  extends ServicesService {
  public url: string = this.getBaseUrl();
  public token = '';

  getListVerified():Observable<any> {
    const header = this.headerBase('all');
    return this.http.get(this.url + 'superadmin/verified/listpage',{headers:header});
  }
 
  isExceptedVerified(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.post(this.url + 'superadmin/verified/excepted', param,{headers:header});
  }
  isRejectVerified(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.post(this.url + 'superadmin/verified/excepted', param,{headers:header});
  }
  isVerifiedBystatus(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.post(this.url + 'superadmin/verified/excepted/status', param,{headers:header});
  }
}
