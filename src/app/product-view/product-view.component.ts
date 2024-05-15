import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from './productmodal';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  // removing local storage data
  data: any | product[];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.displayproducts();
    localStorage.removeItem('ecomdata')
  }

  displayproducts() {
    this.api.getproducts().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }

  addtocart(item: product) {
    this.api.addtocart(item);
  }

  removeitems(item: product) {
    this.api.removecartitems(item);
  }
}
