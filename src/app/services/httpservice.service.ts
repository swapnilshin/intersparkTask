import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  private endPoint: string = `http://localhost:3000/`;

  constructor(private httpClient: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    return this.httpClient.get(this.endPoint + url, { params });
  }

  post(url: string, body?: any): Observable<any> {
    return this.httpClient.post(this.endPoint + url, body);
  }

  put(url: string, body?: any): Observable<any> {
    return this.httpClient.put(this.endPoint + url, body);
  }

}
