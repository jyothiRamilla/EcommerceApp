import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  Product:any = [];

  constructor(private productService: ProductService) {
    this.readProduct();
   }

  ngOnInit(): void {
  }
  readProduct(){
    this.productService.getProducts().subscribe((data) =>{
      this.Product = data;
    })
  }

  removeProduct(product,index){
    if(window.confirm('Are you sure?')){
      this.productService.deleteProduct(product._id).subscribe((data)=>{
        this.Product.splice(index,1);
      })
    }
  }

}
