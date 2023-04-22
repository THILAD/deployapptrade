

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor(public http: HttpClient) { }
  protected getBaseUrl(): string {
     return 'https://trading-api.herokuapp.com/api';
    //  return 'http://43.229.133.120:5000/api/v1/';

  }
  public imageURL(): string {
      return 'https://trading-api.herokuapp.com/api/image/';
  }
  public tokenKey(): string {
      return '489b373cea4f191c866fde522ffc82a2';
  }

  protected headerBase(m:string=""): any {
    const token = localStorage.getItem('token');
    const fixToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGMwM2RlOWFjY2NjNjZiNmQ1NTdmYyIsImlhdCI6MTY3ODUyMjYyNSwiZXhwIjoxNjc5MTI3NDI1fQ.IuPBO_W-SXnrfTzi6kFL_dHW178Q9KNmv4YedAYrW3s'
    // const headers = new HttpHeaders()
    let headers = new HttpHeaders().set('responseType', 'blob')
            .set('Authorization', 'Bearer ' + token);
    ;
    return headers;
  }
}