import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class VerifiedService extends ServicesService {
  // constructor() { }
  public url: string = this.getBaseUrl();
  public token = '';

 isGetVerifiedListAll(object:any):Observable<any> {
  console.log('object',object);
  
   const header = this.headerBase(); 
   return this.http.get(this.url + `/verify/all?limit=${object.limit}&page=${object.page}`,{headers:header})
 }
 isAaproveVeriflied(id:string):Observable<any> {
  const header = this.headerBase(); 
  return this.http.put(this.url + `/verify/approve/${id}`,{},{headers:header})
}
isRejectVeriflied(id:string):Observable<any> {
  const header = this.headerBase(); 
  return this.http.put(this.url + `/verify/reject/${id}`,{},{headers:header})
}
isGetListBySatus(id:string):Observable<any> {
  const header = this.headerBase(); 
  return this.http.get(this.url + `/verify/all`,{headers:header})
}

}
