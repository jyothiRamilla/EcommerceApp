import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import {catchError, map } from 'rxjs/operators';
import { HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartUrl = "http://localhost:4000/api/cart";
  headers = new HttpHeaders().set('Content-Type','application/json'); 
  constructor(private http: HttpClient) { }

  //create 
  createCart(data): Observable<any>{
    let url = `${this.cartUrl}/create`;
    return this.http.post(url,data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }
 // Get all Carts
 getCarts() {
  return this.http.get(`${this.cartUrl}`);
}

// Get Cart
getCart(id): Observable<any> {
  let url = '${this.cartUrl}/read/${id}';
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

// Update Cart
updateCart(id, data): Observable<any> {
  let url = `${this.cartUrl}/update/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

// Delete Cart
deleteCart(id): Observable<any> {
  let url = `${this.cartUrl}/delete/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )
}

// Error handling 
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}





}
