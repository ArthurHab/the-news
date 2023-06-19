import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductsService } from '../services/ProductsService/products.service';

@Component({
  selector: 'app-fifth-component',
  templateUrl: './fifth-component.component.html',
  styleUrls: ['./fifth-component.component.css']
})
export class FifthComponentComponent {

  constructor(
    private productsService: ProductsService
  ){}

  products: Product[] = [];
  numberOfProducts: number = 1;

  async getProducts(){
    this.products = await this.productsService.getProducts(this.numberOfProducts);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
