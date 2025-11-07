import { Component } from '@angular/core';
import { TopDeals } from "../top-deals/top-deals";
import { DataBinding } from "../data-binding/data-binding";
import { Directives } from "../directives/directives";
import { MyModal } from "../my-modal/my-modal";
import { UserList } from "../user-list/user-list";
import { Products } from '../products/products';
import { Crud } from "../crud/crud";
import { Pipes } from "../pipes/pipes";

@Component({
  selector: 'app-body',
  imports: [TopDeals, DataBinding, Directives, MyModal, UserList, Products, Crud, Pipes],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
 
}
