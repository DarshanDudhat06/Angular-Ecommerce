import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public cartitems: number = 0;
  public showproduct:any=[]
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.products().subscribe((res) => {
      this.cartitems = res.length;
      this.showproduct = res;
    });
  }

  delete(item:product){
    this.api.removecartitems(item);
  }

  emptycart(){
    this.api.removeallitems();
  }
}
