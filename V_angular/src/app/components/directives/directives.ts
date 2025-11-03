import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num: number = 4;
  cars = ['Tata', 'Honda', 'Toyota', 'Hyundai']
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];


     tasks = [
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false }
  ];

  products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest.",
      "category": "Bags",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      "rating": { "rate": 3.9, "count": 120 }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts",
      "price": 22.3,
      "description": "Slim-fitting style, soft fabric for breathable and comfortable wear.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      "rating": { "rate": 4.1, "count": 259 }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "Great jacket for Spring/Autumn/Winter and outdoor use.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      "rating": { "rate": 4.7, "count": 500 }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "Good casual wear, soft and durable material.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      "rating": { "rate": 2.1, "count": 430 }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, inspired by the mythical water dragon.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
      "rating": { "rate": 4.6, "count": 400 }
    }
  ];

  cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 2499, qty: 1 },
    { id: 2, name: 'Smart Watch', price: 4999, qty: 2 },
    { id: 3, name: 'Bluetooth Speaker', price: 1999, qty: 1 },
    { id: 4, name: 'Power Bank', price: 1299, qty: 3 }
  ];

  increase(item: any) {
    item.qty++;
  }

  decrease(item: any) {
    if (item.qty > 1) {
      item.qty--;
    }
  }

  filter = 'All';
  category = 'All';

  toggle(task: any) {
    task.completed = !task.completed;
  }
  getTotal() {
    let sum = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      sum = sum + (this.cartItems[i].price * this.cartItems[i].qty);
    }
    return sum;
  }

}