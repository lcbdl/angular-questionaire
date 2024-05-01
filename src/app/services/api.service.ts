import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params = {}, opts = {}): Observable<T> {
    return this.http.get<T>(url, { ...opts, params });
  }

  post<T>(url: string, body?: any, opts?: any): Observable<HttpEvent<T>> {
    return this.http.post<T>(url, body, opts);
  }

  put<T>(url: string, body?: any, opts = {}): Observable<T> {
    return this.http.put<T>(url, body, opts);
  }

  delete<T>(url: string, opts = {}): Observable<T> {
    return this.http.delete<T>(url, opts);
  }
}
