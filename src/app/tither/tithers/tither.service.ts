import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tither } from './tither';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/core/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class TitherService {

  url = environment.apiUrl;
  private token = "";

  constructor(private http: HttpClient, private tokenSerice: TokenService) { }

  getAllTithers(): Observable<Tither[]> {
    this.token = this.tokenSerice.getToken();
    return this.http.get<Tither[]>(
      `${this.url}/api/tithers`,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }

  getTitherById(idTither: string): Observable<Tither> {
    this.token = this.tokenSerice.getToken();
    const apiurl = `${this.url}/api/tithers/${idTither}`;
    return this.http.get<Tither>(
      apiurl,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }

  postTither(tither: Tither): Observable<Tither> {
    this.token = this.tokenSerice.getToken();
    return this.http.post<Tither>(
      `${this.url}/api/tithers`,
      tither,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }

  editTither(tither: Tither): Observable<Tither> {
    this.token = this.tokenSerice.getToken();
    return this.http.put<Tither>(
      `${this.url}/api/tithers`,
      tither,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }

  deleteTither(idTither: string): Observable<Tither> {
    this.token = this.tokenSerice.getToken();
    return this.http.delete<Tither>(
      `${this.url}/api/tithers/${idTither}`,
      { headers: { 'Authorization': `bearer ${this.token}` } }
    );
  }
}
