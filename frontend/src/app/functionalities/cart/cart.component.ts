import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Cart:any = [];
  size:number;
  dataSource;
  displayedColumns: string[] = ['cid', 'cname', 'curl', 'cprice'];

  constructor(private cartService:CartService) { 
    this.readCart();
  }

  dec() { 
    if(this.size<=0){
      return this.size=0
    }else{this.size= this.size - 1;
         
    return (this.size) }
  }

  inc() { this.size = this.size +1;
    return this.size}
  
  ngOnInit(): void {
    this.size=1
  }

  readCart(){
    this.cartService.getCarts().subscribe((data)=>{
      this.Cart = data;
    })
  }
  removeCart(cart,index){
    if(window.confirm('Are you sure?')){
      this.cartService.deleteCart(cart._id).subscribe((data)=>{
        this.Cart.splice(index,1);
      })
    }
  }  
}
