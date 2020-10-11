import {Component, Input} from '@angular/core';
import {Product} from '../models/products-config';
import {MiniCartService} from '../../services/mini-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;

  constructor(private miniCartService: MiniCartService) {}

  buyProduct() {
    this.miniCartService.add(this.product);
  }
}
