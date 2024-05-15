import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../product-view/productmodal';
import{BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public cartitemlist:any=[];
public amount:number= 0
public productlist = new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }

  getproducts(){
    return this.http.get<product[]>("https://dummyjson.com/products");
  }
  getproductid(id:string){
    return this.http.get("https://dummyjson.com/products/"+id)
  }
  addtocart(data:product){
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist);
  }
  products(){
    return this.productlist.asObservable();
  }
  removecartitems(data:product){
    this.cartitemlist.map((a:product,index:product)=>{
      if(data.id === a.id){
        this.cartitemlist.splice(index,1)

      }
    })
    this.productlist.next(this.cartitemlist)
  }

  // total calculation
  calculateprice(){
    let total = 0;
    this.cartitemlist.map((a:any)=>{
      total +=a.price;
    })
    return total;
  }

  // remove all item
  removeallitems(){
    this.cartitemlist =[];
    this.productlist.next(this.cartitemlist)
  }

  //passing data from one component to another component
  sendfinalamount(data:number){
    this.amount = data;
  }
  receivefinalamount(){
    return this.amount;
  }
}
