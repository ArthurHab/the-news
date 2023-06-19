import { Injectable } from '@angular/core';
import { Product } from '../../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  async getProducts(numberOfProducts: number = 1){
    let data: Product[] = [];

    data = await fetch(`https://fakestoreapi.com/products?limit=${numberOfProducts}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => console.log("Falha ao tentar se comunicar com a API!"));
  
    return data;
  }

  constructor() { }
}
