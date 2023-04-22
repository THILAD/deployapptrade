

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {ServicesService  } from "./base-service.service";

@Injectable({
  providedIn: 'root'
})
export class WalletServiceService  extends ServicesService {
  public url: string = this.getBaseUrl();
  public token = '';

  getListDepositBypage(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/wallet/deposit/listpage',param,{headers:header});
  }
  getListDepositBystatus(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/wallet/deposit/listpage/status',param,{headers:header})
  }
  isApproveDeposit(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/wallet/deposit/approve',param,{headers:header})
  }
  isApproveDepositRejected(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/wallet/deposit/rejected',param,{headers:header})
  }
  //Witdraw
  isApproveWithdrawListPage(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/wallet/withdraw/listpage',param,{headers:header})
  }
  isApproveWithdrawListStatus(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/wallet/withdraw/listpage/status',param,{headers:header})
  }
  isApproveWithdraw(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/wallet/withdraw/approve',param,{headers:header})
  }
  isApproveWithdrawRejected(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'superadmin/wallet/withdraw/rejected',param,{headers:header})
  }

  isGetWalletDetail(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + '/user/wallet/detail',param,{headers:header})
  }
  isWalletWithdrawTicket(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'wallet/ticket/withdraw',param,{headers:header})
  }
  isWalletDepositTicket(param:any):Observable<any> {
    const header = this.headerBase('all');
    return this.http.post(this.url + 'wallet/ticket/deposit',param,{headers:header})
  }
  
}
