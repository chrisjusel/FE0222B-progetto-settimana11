import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];

  constructor() { }

  addItemToCart(item: Product){
    this.cartItems.push(item);
    console.log(this.cartItems);
  }

  getCartItems(){
    return this.cartItems;
  }

}
