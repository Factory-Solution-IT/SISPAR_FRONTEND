import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tithe } from './tithe';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../core/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class TitheService {

  url = environment.apiUrl;
  token = "";

  constructor(private http: HttpClient, private tokenSerice: TokenService) { }

  getAllTithes(): Observable<Tithe[]> {
    this.token = this.tokenSerice.getToken();
    return this.http.get<Tithe[]>(
      `${this.url}/api/tithes`,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }

  getTitheById(titheId: string): Observable<Tithe> {
    this.token = this.tokenSerice.getToken();
    const apiUrl = `${this.url}/api/tithes/${titheId}`;
    return this.http.get<Tithe>(
      apiUrl,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }

  getTithesByTitherId(titherId: string): Observable<Tithe> {
    this.token = this.tokenSerice.getToken();
    const apiUrl = `${this.url}/api/tithes/bytitherid/${titherId}`;
    return this.http.get<Tithe>(
      apiUrl,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }

  editTithe(tithe: Tithe): Observable<Tithe> {
    this.token = this.tokenSerice.getToken();
    return this.http.put<Tithe>(
      `${this.url}/api/tithes`,
      tithe,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }

  postTithe(tithe: Tithe): Observable<Tithe> {
    this.token = this.tokenSerice.getToken();
    return this.http.post<Tithe>(
      `${this.url}/api/tithes`,
      tithe,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }

  deleteTithe(idTithe: string): Observable<Tithe> {
    this.token = this.tokenSerice.getToken();
    return this.http.delete<Tithe>(
      `${this.url}/api/tithes/${idTithe}`,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }
}
