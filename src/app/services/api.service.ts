import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string, params = {}, opts = {}): Observable<any> {
    return this.http.get(url, { ...opts, params });
  }

  post(url: string, body?: any, opts?: any): Observable<any> {
    return this.http.post(url, body, opts);
  }

  put(url: string, body?: any, opts = {}): Observable<any> {
    return this.http.put(url, body, opts);
  }

  delete(url: string, opts = {}): Observable<any> {
    return this.http.delete(url, opts);
  }
}
