import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class TicketChatlistService extends ServicesService {

  // constructor() { }

  public url: string = this.getBaseUrl();
  public token = '';
  sendMessaged(object:any):Observable<any> {
    const header = this.headerBase();
    // /api/ticket/:id/chat
    return this.http.put(this.url + `/ticket/:${object.id}/chat`,object.text,{headers:header})
  }
  isGetListTicketChatList():Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + '/ticket/all',{headers:header})
  }
  isGetListTicketChatListByOwner(params:any):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + `/ticket/all?isClosed=${params.isClosed}&sort=-date&_id=${params._id}`,{headers:header})
  }
  isGetAvatar(imageName:any):Observable<any> {
    const header = this.headerBase();
    return this.http.get(this.url + '/image/'+imageName,{headers:header})
  }
}
