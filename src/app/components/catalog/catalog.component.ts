import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Product, ProductsConfig} from '../models/products-config';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {

  private products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }

}
