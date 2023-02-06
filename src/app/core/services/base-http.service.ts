import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {


  currentUrl: string = environment.url

  roleData: any = localStorage.getItem('LoginData')


  constructor(private http: HttpClient) {
  }

  permission<T>(url: string): Observable<T> {
    let bearer: any = localStorage.getItem('userToken');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': bearer
    });
    return this.http.get<T>(url, { headers: header }).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }


  get<T>(url: string): Observable<T> {
    let bearer: any = localStorage.getItem('userToken');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': bearer
    });
    return this.http.get<T>(this.currentUrl + url, { headers: header }).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  post<T>(url: string, body: any): Observable<T> {
    let bearer: any = localStorage.getItem('userToken');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': bearer
    });
    return this.http
      .post<T>(this.currentUrl + url, JSON.stringify(body), { headers: header })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  postImg<T>(url: string, body: any): Observable<T> {
    let bearer: any = localStorage.getItem('userToken');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': bearer
    });
    return this.http
      .post<T>(this.currentUrl + url, body, { headers: header })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  login<T>(url: string, body: any): Observable<T> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<T>(this.currentUrl + url, JSON.stringify(body), { headers: header })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }
  getRole<T>(url: string): Observable<T> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<T>(this.currentUrl + url, { headers: header }).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    // console.log(error, 'handleError');
    if (error.error instanceof Error) {
      // Get client-side error
      console.log(error.error, 'client-side error');
      errorMessage = error.error.message;
      console.log(errorMessage)
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status} \n statusText: ${error.statusText} \n Message: ${error.message}`;
      console.log(errorMessage);
    }
    return throwError(error);
  }

  getHeroes(): Observable<any> {
    return this.http.get<any>("ad")
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.MyAppHttp<any>('getHeroes', []))
      );
  }
  MyAppHttp<T>(arg0: string, arg1: never[]): (err: any, caught: Observable<ArrayBuffer>) => import("rxjs").ObservableInput < any > {
    throw new Error('Method not implemented.');
  }
  log(arg0: string): void {
    throw new Error('Method not implemented.');
  }
  logout<T>(url: string): Observable<T> {
    let bearer: any = localStorage.getItem('userToken');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': bearer
    });
    this.currentUrl = environment.url + "yoga/";
    return this.http.get<T>(this.currentUrl + url, { headers: header }).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }


  fileUpload<T>(url: string, body: any): Observable<T> {
    let bearer: any = localStorage.getItem('userToken');
    // console.log(body.get("files").type);
    let inProgress
    const header = new HttpHeaders({
      // 'Content-Type': body.get("files").type,
      // 'token': bearer
    });
    // return this.http
    //   .post<T>(this.currentUrl + url, body, {
    //     headers: header,
    //     reportProgress: true,
    //     // observe:'events',
    //   })
    //   .pipe(
    //     map((response) => response),
    //     catchError(this.handleError)
    //   );

    return this.http.post<any>(this.currentUrl + url, body, {
      headers: header,
      reportProgress: true,

    }).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }
}
