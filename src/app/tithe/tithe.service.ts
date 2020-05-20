import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tithe } from './tithe';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitheService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllTithes(): Observable<Tithe[]> {
    return this.http.get<Tithe[]>(`${this.url}/api/tithes`);
    //return this.http.get<Tithe[]>(`${this.url}/api/tithes/bytitherid/{titherId}`);
  }

  getTithesById(idTithe: string): Observable<Tithe[]> {
    const apiUrl = `${this.url}/api/tithes/${idTithe}`;
    //const apiUrl = `${this.url}/api/tithes/bytitherid/{titherId}`;
    return this.http.get<Tithe[]>(apiUrl);
  }

  postTithe(tithe: Tithe): Observable<Tithe>{
    return this.http.post<Tithe>(`${this.url}/api/tithes`, tithe);
    //return this.http.post<Tithe>(`${this.url}/api/tithes/bytitherid/{titherId}`, tithe);
  }

  deleteTithe(idTithe: string): Observable<Tithe> {
    return this.http.delete<Tithe>(`${this.url}/api/tithes/${idTithe}`);
    //return this.http.delete<Tithe>(`${this.url}/api/tithes/bytitherid/{titherId}`);
  }
}
