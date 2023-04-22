import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ServicesService  } from "./base-service.service";

@Injectable({
  providedIn: 'root'
})
export class IstraderSeriviceService extends ServicesService {
  public url: string = this.getBaseUrl();
  public token = '';

  isGetlistPageTradeLive(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/trade/list/all',param,{headers:header})
  }
  isDefineAdminUpdate(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/trade/update/status',param,{headers:header})
  }
  isDefineAdmin(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'user/transetion/update/config',param,{headers:header})
  }
  getListBetForexAll(){
    const header = this.headerBase();
    return this.http.get(this.url + '/forex/bet/all',{headers:header})
  }
  getListBetForexPage(params:any){
    const header = this.headerBase();
    return this.http.get(this.url + `/forex/bet/all?limit=${params.limit}&page=${params.page}`,{headers:header})
  }
}
