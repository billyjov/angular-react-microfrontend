import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * GET request.
   *
   * @param string url The specific endpoint url.
   * @param string [apiBaseUrl] An optional base url as soon as it's different to the default.
   * @returns Observable<T>
   */
  public get<T>(url: string, apiBaseUrl?: string): Observable<T> {
    return this.http.get<T>(apiBaseUrl ? `${apiBaseUrl}${url}` : `${environment.apiBaseUrl}${url}`);
  }

  /**
   * POST request.
   *
   * @param string url The specific endpoint url.
   * @param T body The object that should be saved.
   * @param string [apiBaseUrl] An optional base url as soon as it's different to the default.
   * @returns Observable<T>
   */
  public post<T>(url: string, body: T, apiBaseUrl?: string): Observable<T> {
    return this.http.post<T>(apiBaseUrl ? `${apiBaseUrl}${url}` : `${environment.apiBaseUrl}${url}`, body);
  }

  /**
   * PUT request.
   *
   * @param string url The specific endpoint url.
   * @param T body The object that should be updated.
   * @param string [apiBaseUrl] An optional base url as soon as it's different to the default.
   * @returns Observable<T>
   */
  public put<T>(url: string, body: T, apiBaseUrl?: string): Observable<T> {
    return this.http.put<T>(apiBaseUrl ? `${apiBaseUrl}${url}` : `${environment.apiBaseUrl}${url}`, body);
  }

  /**
   * DELETE request.
   *
   * @param string url The specific endpoint url.
   * @param string [apiBaseUrl] An optional base url as soon as it's different to the default.
   * @returns Observable<T>
   */
  public delete<T>(url: string, apiBaseUrl?: string): Observable<T> {
    return this.http.delete<T>(apiBaseUrl ? `${apiBaseUrl}${url}` : `${environment.apiBaseUrl}${url}`);
  }
}
