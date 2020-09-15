import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  Product:any = [];


  constructor(private productService: ProductService,private cartService: CartService) { 
    this.readProduct();
  }


  ngOnInit(): void {
  }
  readProduct(){
    this.productService.getProducts().subscribe((data) =>{
      this.Product = data;
    })
  }
  add(cid:string,cname: string,curl:string,cprice:number): void {
    cid=cid.trim();
    cname = cname.trim();
    curl = curl.trim();
    cprice=cprice;
    console.log(cid);
    console.log(cname);
    if (!cname) { return; }
    console.log("working");
    this.cartService.createCart({ cid,cname,curl,cprice })
      .subscribe((res) => {
        console.log("Item added to cart!!")
      },(error) =>{
        console.log(error);
      });
  }

}
