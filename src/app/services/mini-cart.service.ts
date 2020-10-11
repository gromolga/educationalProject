import {Injectable} from '@angular/core';
import {Product} from '../components/models/products-config';
import {CartItem} from '../components/models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class MiniCartService {
  cartItems: CartItem[] = [];

  add(product: Product) {
    this.cartItems.push({
      productId: product.id,
      qty: 1,
    });
  }
}
