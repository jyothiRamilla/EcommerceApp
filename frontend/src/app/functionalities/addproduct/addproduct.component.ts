import { Router } from '@angular/router';
import { Component, OnInit,NgZone } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  submitted = false;
  productForm:FormGroup;


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private productService:ProductService
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm(){
    this.productForm= this.fb.group({
      name:['',[Validators.required]],
      url:['',[Validators.required]],
      price:['',[Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  get myForm(){
    return this.productForm.controls;
  }
  onSubmit(){
    this.submitted= true;
    if(!this.productForm.valid){
      console.log("form error")
      return false;
    }else{
      console.log("Error after ")
      this.productService.createProduct(this.productForm.value).subscribe(
        (res) => {
          console.log("Hii")
          console.log('Product successfully added!')
          this.ngZone.run(() => this.router.navigateByUrl('/dashboard'))
        },(error) =>{
          console.log(error);
        });
    }
  }
}
