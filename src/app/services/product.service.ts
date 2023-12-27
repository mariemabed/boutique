import { Injectable } from '@angular/core';
import { Produit } from '../shared/models/models/produit';
import { CATALOGUE } from '../shared/models/mock-data/catalogue-produits';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl: string = 'http://localhost:3000/produits';
  
  constructor() { }
  getProducts(): Produit[] {
    return CATALOGUE;
    }
    
}
