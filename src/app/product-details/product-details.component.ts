import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productdata: any | product;
  showadd: boolean = true;
  showremove: boolean = false;
  constructor(
    private api: ApiService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid');
    // console.log("product id is",productid)
    productid &&
      this.api.getproductid(productid).subscribe((res) => {
        this.productdata = res;
        console.log(res);
      });
  }
  addtocart(productdata: product) {
    this.showadd = false;
    this.showremove = true;
    this.api.addtocart(productdata);
  }
  removeitems(productdata: product) {
    this.showremove = false;
    this.showadd = true;
    this.api.removecartitems(productdata);
  }
}
