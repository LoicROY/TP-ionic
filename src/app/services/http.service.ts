import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {

    public url = 'http://localhost:3000/Cours';

    constructor(private http: HttpClient) { }

    public getAll(): Observable<T[]> {
      return this.http.get<T[]>(this.url);
    }

    public getOne(key: any): Observable<T> {
      return this.http.get<T>(`${this.url}\${key}`);
    }

    public post(data: T): Observable<T> {
      return this.http.post<T>(this.url, data);
    }

    public delete(index: number): Observable<T> {
      return this.http.delete<T>(`${this.url}/${index}`);
    }
}
