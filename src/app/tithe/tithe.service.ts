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
  }

  getTitheById(titheId: string): Observable<Tithe> {
    const apiUrl = `${this.url}/api/tithes/${titheId}`;
    return this.http.get<Tithe>(apiUrl);
  }

  getTithesByTitherId(titherId: string): Observable<Tithe> {
    const apiUrl = `${this.url}/api/tithes/bytitherid/${titherId}`;
    return this.http.get<Tithe>(apiUrl);
  }

  editTithe(tithe: Tithe): Observable<Tithe> {
    return this.http.put<Tithe>(
      `${this.url}/api/tithes/${tithe.id}`, 
      tithe
    );
  }

  postTithe(tithe: Tithe): Observable<Tithe> {
    return this.http.post<Tithe>(
      `${this.url}/api/tithes`,
      tithe
    );
  }

  deleteTithe(idTithe: string): Observable<Tithe> {
    return this.http.delete<Tithe>(`${this.url}/api/tithes/${idTithe}`);
  }
}
