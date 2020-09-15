import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';
import {ActivatedRoute, Router } from '@angular/router';
import {ProductService} from '../../services/product.service';
import {FormGroup,FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  submitted = false;
  editForm:FormGroup;
  productData: Product[];
  
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private productService:ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateProduct();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getProduct(id);
    this.editForm = this.fb.group({
      name: ['',[Validators.required]],
      url: ['',[Validators.required]],
      price:['',[Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  get myForm(){
    return this.editForm.controls;
  }
  getProduct(id){
    this.productService.getProduct(id).subscribe(data =>{
      this.editForm.setValue({
        name: data['name'],
        url:data['url'],
        price:data['price'],
      });
    });
  }

  updateProduct(){
    this.editForm = this.fb.group({
      name: ['',[Validators.required]],
      url: ['',[Validators.required]],
      price:['',[Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(!this.editForm.valid){
      return false;
    }else{
      if(window.confirm("Are you sure?")){
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.productService.updateProduct(id,this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/dashboard');
            console.log('Product updated Successfully!')
          },(error) =>{
            console.log(error)
          })
      }
    }
  }
}


