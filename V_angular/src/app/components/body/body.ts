import { Component } from '@angular/core';
import { TopDeals } from "../top-deals/top-deals";
import { DataBinding } from "../data-binding/data-binding";
import { Directives } from "../directives/directives";

@Component({
  selector: 'app-body',
  imports: [TopDeals, DataBinding, Directives],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
 
}
