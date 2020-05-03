import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tither } from '../tither';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitherService {

  url = 'http://localhost:5000/api/tithers';

  constructor(private http: HttpClient) { }

  getAllTithers(): Observable<Tither[]> {
    return this.http.get<Tither[]>(this.url);
  }

  getTitherById(idTither: string): Observable<Tither> {
    const apiurl = '${this.url}/${idTither}';
    return this.http.get<Tither>(apiurl);
  }
}
