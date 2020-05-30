import { HttpInterceptor, HttpRequest, HttpHandler,
    HttpSentEvent, HttpHeaderResponse, HttpResponse, HttpUserEvent, HttpProgressEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

constructor(private tokenSerice: TokenService) {}

intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse
    | HttpProgressEvent | HttpResponse<any>
    | HttpUserEvent<any>> {
        console.log(`token RequestInterceptor`);

        if (this.tokenSerice.hasToken()) {
            const token = this.tokenSerice.getToken();
            console.log(`token encontrado ${token}`);
            req = req.clone(
                {
                    setHeaders: {
                        'Authorization': `bearer ${token}`
                    }
                });
        }
        return next.handle(req);
}
}