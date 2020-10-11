import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MiniCartService} from '../../services/mini-cart.service';
import {CartItem} from '../models/cart-item';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('shoppingCart', {static: false})
  private shoppingCart: ElementRef;
  private isShoppingCartOpen = false;
  private cartItems: CartItem[];
  get itemsForView() {
    const cartItems = this.miniCartService.cartItems;
    const products = this.productService.products;

    return cartItems.map((cartItem) => {
      return {
        gty: cartItem.qty,
        product: products.find((product) => product.id === cartItem.productId),
      };
    });
  }


  constructor(
    private miniCartService: MiniCartService,
    private productService: ProductService,
  ) {}

  openShoppingCart() {
    if (this.isShoppingCartOpen) {
      this.isShoppingCartOpen = false;
    } else {
      this.isShoppingCartOpen = true;
    }
  }

  ngOnInit() {
    this.cartItems = this.miniCartService.cartItems;
  }
}
