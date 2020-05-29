import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl;
  
  constructor(private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string) {

      return this.http
        .post
          (`${this.url}/api/auth`,
          { userName, password },
          { observe: 'response' })
        .pipe(tap(res => {
           console.log(res.body['token']);
          //const authToken = res.headers.get('x-access-token');
          const authToken = res.body['token'];
          this.userService.setToken(authToken);
          console.log (`User ${userName} authenticated with token ${authToken}`);
        }));
    }
}
