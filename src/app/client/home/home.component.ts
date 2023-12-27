import { Component } from '@angular/core';
import { CATALOGUE } from 'src/app/shared/models/mock-data/catalogue-produits';
import { Produit } from 'src/app/shared/models/models/produit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title ="PRODUITS";
  produits = CATALOGUE;
  onDetail(prod:Produit){
    alert(prod.description);
  }

}
