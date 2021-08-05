import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  url = 'https://api-ssl.bitly.com/v4/shorten';

  // Esto solo se usa si no tenemos interceptores
  /*   TOKEN = '6c8112b4d4092368f1d9a1ca15d3022a9f4c4533'; */

  constructor(private http: HttpClient) {}

  getUrlShort(nombreUrl: string): Observable<any> {
    // Esto solo se usa si no tenemos interceptores
    /*     const tokenHeader = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    }); */

    const body = {
      long_url: nombreUrl,
    };

    return this.http.post(this.url, body);

    // los errores se pueden manejar desde el interceptor, el servicio o el mismo componente
    /*     .pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(error);
      })
    ); */
  }
}
