import { Component } from '@angular/core';
import { Product } from '../../Product';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];

  async getProducts(){
    this.products = await this.productsService.getProducts()
  }

  constructor(
    private productsService: ProductsService
  ){}

  ngOnInit(){
    this.getProducts();
  }
}
