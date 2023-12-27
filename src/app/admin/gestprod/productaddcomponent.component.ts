import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Produit } from 'src/app/shared/models/models/produit';

@Component({
  selector: 'app-productaddcomponent',
  templateUrl: './productaddcomponent.component.html',
  styleUrls: ['./productaddcomponent.component.css']
})
export class ProductaddcomponentComponent  implements OnInit{
  
  productAddForm : FormGroup ;
  crudService: any;
 
  
  constructor(private fb:FormBuilder,private productService:CrudService) {  }  
    
  ngOnInit(): void {
    this. productAddForm = this.fb.group ({
    nameControl: [''],
    prixControl: [''],
    descriptionControl: [''],
    imageControl: [''],
    categorieControl: [''],
    });
  }
  addProducts():void{
    if (this.productAddForm.valid){
      const formData :Produit =this.productAddForm.value;
      this.productService.addProduct(formData).subscribe(result=>{
      });
    }
  }

  onAjouter() : void {
    const newProduct = this.productAddForm.value as Produit;
    this.crudService.addProduct(newProduct).subscribe(() => {
      this.addProducts();
      this.productAddForm.reset(); // Clear the form after adding a new product
    });

  }
  
 
}
