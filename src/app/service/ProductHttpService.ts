import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductHttpService {
    private productsUrl = 'https://fakestoreapi.com/products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.productsUrl)
        .pipe(
            tap(_ => console.log('Products are downloaded')),
            catchError(error => {
                console.error(error.message);
                return of([]);
            })
        );
    }
}
