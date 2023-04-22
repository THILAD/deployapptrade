import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class RequestwalletService extends ServicesService {
   // constructor() { }
   public url: string = this.getBaseUrl();
   public token = '';
 //Deposit
  isGetListRequestWalletPageAndType(params:any):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + `/request/all?&limit=${params.limit}&page=${params.page}?&type=${params.type}`,{headers:header})
  }
  
   isApproveWalletDeposit(id:any):Observable<any> {
    const header = this.headerBase();
    return this.http.put(this.url + `/request/approve/${id}`,{},{headers:header})
  }
  isGetByApproveByStatus(object:any):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + `/request/all?isSuccess=${object.status}&limit=${object.limit}&page=${object.page}?&type=${object.type}`,{headers:header})
  }

  //Withdraw is
  isGetSumAll(params:any):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + `/request/all?owner=${params.owner}`,{headers:header})
  }
  isGetHistoryWallet(params:any):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + `/wallet/history/all?owner=${params.owner}`,{headers:header})
  }
  isGetSumAllBytype(params:any):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + `/request/all?type=${params.type}&owner=${params.owner}`,{headers:header})
  }

  isGetSumAllByStstus(params:any):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + `/wallet/history/all?owner=${params.owner}&status=${params.status}`,{headers:header})
  }
  isRechargeDeposit(params:any):Observable<any> {
    const header = this.headerBase();
    return this.http.post(this.url + `/wallet/deposit`,params,{headers:header})
  }
}