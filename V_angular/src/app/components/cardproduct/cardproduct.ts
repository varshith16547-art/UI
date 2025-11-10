import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cardproduct',
  templateUrl: './cardproduct.html',
  styleUrl: './cardproduct.css',
  inputs: ['product'],             
  outputs: ['productSelected']     
})
export class CardProduct {
  product: any;
  productSelected = new EventEmitter();

  sendProductToParent() {
    this.productSelected.emit(this.product);
  }
}
