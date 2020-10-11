import {Injectable} from '@angular/core';
import {ProductsConfig} from '../components/models/products-config';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements ProductsConfig {
  products = [
    { id: 1, name: 'Product 1', text: '130' },
    { id: 2, name: 'Product 2', text: '130' },
    { id: 3, name: 'Product 3', text: '130' },
    { id: 4, name: 'Product 4', text: '130' },
    { id: 5, name: 'Product 5', text: '130' },
    { id: 6, name: 'Product 6', text: '130' },
    { id: 7, name: 'Product 7', text: '130' },
    { id: 8, name: 'Product 8', text: '130' },
    { id: 9, name: 'Product 9', text: '130' },
    { id: 10, name: 'Product 10', text: '130' },
    { id: 11, name: 'Product 11', text: '130' },
    { id: 12, name: 'Product 12', text: '130' },
  ];
}
