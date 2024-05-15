import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
public totalamount :number =0;
public grandtotal :number =0;
public userdata:any;
public username:any;
  constructor(private api:ApiService,
    private router:Router) { }

  ngOnInit():void {
    setTimeout(() => {
      this.router.navigate(["/"])
      this.api.removeallitems();
    }, 4000);

    // total amount coming from api
    this.totalamount = this.api.calculateprice();

    // receiving amount
    this.grandtotal = this.api.receivefinalamount();

    // getting items from localstorage
let localdata = localStorage.getItem('ecomdata');
this.userdata=localdata;
this.username=JSON.parse(this.userdata);

  }



}
