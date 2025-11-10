import { Component } from '@angular/core';
import products from './product_data';
import { CardProduct } from '../cardproduct/cardproduct';

@Component({
  selector: 'app-product',
  imports: [CardProduct],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  allProducts = products;      
  cartItems: any[] = [];        

  add(productFromChild: any) {
    this.cartItems.push(productFromChild);
  }
}
