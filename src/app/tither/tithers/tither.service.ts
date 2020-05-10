import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tither } from './tither';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitherService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllTithers(): Observable<Tither[]> {
    return this.http.get<Tither[]>(`${this.url}/api/tithers`);
  }

  getTitherById(idTither: string): Observable<Tither> {
    const apiurl = `${this.url}/api/tithers/${idTither}`;
    return this.http.get<Tither>(apiurl);
  }

  postTither(tither: Tither): Observable<Tither> {
    return this.http.post<Tither>(`${this.url}/api/tithers`, tither);
  }

  deleteTither(idTither: string): Observable<Tither> {
    return this.http.delete<Tither>(`${this.url}/api/tithers/${idTither}`);
  }
}
