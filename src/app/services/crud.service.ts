import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit } from '../shared/models/models/produit';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  productUrl: string = 'http://localhost:3000/produits';

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { } 
  getProducts(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.productUrl)
    .pipe(
    catchError(this.handleError<Produit[]>('getProducts', []))
    );
    }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
    };
    }
    addProduct(product: Produit): Observable<Produit> {
      return this.http.post<Produit>(this.productUrl, product, this.httpOptions)
        .pipe(
          catchError(this.handleError<Produit>('addProduct'))
        );
    }

  // Update
  // Update
  updateProduct(product: Produit): Observable<Produit> {
    const url = `${this.productUrl}/${product.id}`;
    return this.http.put<Produit>(url, product, this.httpOptions)
      .pipe(
        catchError(this.handleError<Produit>('updateProduct'))
      );
  }

  // Delete
  deleteProduct(id: number): Observable<Produit> {
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<Produit>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Produit>('deleteProduct'))
      );
  }
  }  