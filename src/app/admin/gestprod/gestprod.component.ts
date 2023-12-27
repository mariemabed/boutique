import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-gestprod',
  templateUrl: './gestprod.component.html',
  styleUrls: ['./gestprod.component.css']
})
export class GestprodComponent implements OnInit {
 
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getProducts().subscribe(products => {
      console.log(products);
    });
  }
  
}