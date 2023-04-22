

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ServicesService  } from "./base-service.service";
@Injectable({
  providedIn: 'root'
})
export class UsermanagerService extends ServicesService {
  public url: string = this.getBaseUrl();
  public token = '';
//  beer api
  getUserListAll():Observable<any> {
    const header = this.headerBase('');
    return this.http.get(this.url + '/auth/users/all',{headers:header});
  }
  getUserListAllPage(params:any):Observable<any> {
    const header = this.headerBase('');
    return this.http.get(this.url + `/auth/users/all?limit=${params.limit}&page=${params.page}`,{headers:header});
  }

  //   getbyid(param:any):Observable<any> {
  //   const header = this.headerBase('login');
  //   return this.http.post(this.url + 'superadmin/superlogin', param,{headers:header});
  // }
  isGetprofilCustomer(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.get(this.url + `/auth/users/all?_id=${param._id}`,{headers:header});
  }



  isAvtiveuser(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.post(this.url + 'admin/actived', param,{headers:header});
  }

  isgetListCustomer(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.post(this.url + 'admin/listbypage', param,{headers:header});
  }
  isSeachCustomer(param:any):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + `/auth/users/all?username=${param}`,{headers:header});
  }



  isGetListId(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.post(this.url + '/admin/listbyid', param,{headers:header});
  }
  isUpadateUser(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.post(this.url + '/admin/update', param,{headers:header});
  }
  isGetall_user(param:any):Observable<any> {
    const header = this.headerBase('login');
    return this.http.post(this.url + '/admin/listall', param,{headers:header});
  }

 

  isGetme(){
    const header = this.headerBase('login');
    return this.http.get(this.url + '/auth/me',{headers:header});

  }

  getUserIp(){
    let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';

return this.http.get('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey,);

  }

}