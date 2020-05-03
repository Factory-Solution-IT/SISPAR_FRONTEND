import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tither } from './tither';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application.json"})};
@Injectable({
  providedIn: 'root'
})
export class TitherService {

  url = 'http://localhost:51724/Tither';

  constructor(private http: HttpClient) { }

  getAllTithers(): Observable<Tither[]> {
    return this.http.get<Tither[]>(this.url);
  }

  getTitherById(idTither: number): Observable<Tither> {
    const apiurl = '${this.url}/${idTither}';
    return this.http.get<Tither>(apiurl);
  }

  createTither(tither: Tither): Observable<Tither> {
    return this.http.post<Tither>(this.url, tither, httpOptions);
  }

  updateTither(idTither: number, tither:Tither): Observable<Tither> {
    const apiurl = '${this.url}/${idTither}';
    return this.http.put<Tither>(apiurl, tither, httpOptions);
  }

  deleteTitherById(idTither: number): Observable<number> {
    const apiurl = '${this.url}/${idTither}';
    return this.http.delete<number>(apiurl, httpOptions);
  }
}
