import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ProductService } from 'src/app/services/product.service';
import { CATALOGUE } from 'src/app/shared/models/mock-data/catalogue-produits';
import { Produit } from 'src/app/shared/models/models/produit';



@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit{
  selectedProduct :Produit;
  title = "PRODUITS" ;
  produits = CATALOGUE ;
  isModifying: boolean=false;
  modifiedProduct: Produit;
  selectProd: Produit;
  productAddForm: any;
  modifyForm: any;

  
  constructor(private crudService: CrudService) {
    
  }
  
  
  onSave(prod:any):void {
    if (prod.description==" "){
      alert("there's not description");
    }
    else {
      ("description: "+prod.description);
    }
  }
  onDetail(prod: Produit): void {
    alert(prod.description);  
  }
  onClick(prod: Produit): void {
    this.selectProd = prod;
  }
  getProducts(): void {
    this.crudService.getProducts()
      .subscribe(products => this.produits = products);
  }
    ngOnInit(): void {
      this.getProducts();
    }
    afficherDetails(prod: Produit): void {
      if (prod.description) {
        alert(`Détails du produit : ${prod.description}`);
      } else {
        alert("Ce produit n'a pas de description disponible.");
      }
    }
    selectProduct(prod: Produit): void {
      this.selectedProduct = prod;
      this.isModifying = false;
      this.modifiedProduct = null;
    }
    
    onModifier(): void {
      this.isModifying = true;
      this.modifiedProduct = { ...this.selectedProduct };
  
      // Pre-fill the form with the selected product details
      this.modifyForm.setValue({
        nameControl: this.modifiedProduct.nom,
        prixControl: this.modifiedProduct.prix,
        descriptionControl: this.modifiedProduct.description,
        imageControl: this.modifiedProduct.image,
        categIdControl: this.modifiedProduct.categId,
      });
    }
  
    onSaveModification(): void {
      if (this.modifiedProduct) {
        this.crudService.updateProduct(this.modifiedProduct).subscribe(
          () => {
            console.log('Update operation completed');
            this.getProducts();
            this.isModifying = false;
            this.modifiedProduct = null;
          },
          error => {
            console.error('Update operation failed:', error);
          }
        );
      }
    }
  
    onCancelModification(): void {
      this.isModifying = false;
      this.modifiedProduct = null;
    }
  
    onSupprimer(): void {
      if (this.selectedProduct) {
        const productId = Number(this.selectedProduct.id);
  
        if (!isNaN(productId)) {
          this.crudService.deleteProduct(productId).subscribe(() => {
            this.getProducts();
            this.selectedProduct = null;
          });
        } else {
          console.error('Invalid productId. Unable to delete the product.');
        }
      }
    }
}


