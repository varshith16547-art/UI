import { Component } from '@angular/core';
import products from './products_data';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  imports: [FormsModule, NgxPaginationModule, FontAwesomeModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  faStar = faStar; 

  filteredProducts = products;
  categoryArr: string[] = [];
  selectedCategory: string = 'All';
  searchText: string = '';
  p: number = 1;

  constructor() {
    this.categoryArr = ['All', ...new Set(products.map(p => p.category))];
  }

  onCategoryChange() {
    this.applyFilters();
  }

  onSearch() {
    this.applyFilters();
  }

  sortAsc() {
    this.filteredProducts.sort((a, b) => a.price - b.price);
  }

  sortDesc() {
    this.filteredProducts.sort((a, b) => b.price - a.price);
  }

  applyFilters() {
    const searchTerm = this.searchText.toLowerCase();
    this.filteredProducts = products.filter(
      p =>
        (this.selectedCategory === 'All' || p.category === this.selectedCategory) &&
        p.title.toLowerCase().includes(searchTerm)
    );
    this.p = 1;
  }
}
