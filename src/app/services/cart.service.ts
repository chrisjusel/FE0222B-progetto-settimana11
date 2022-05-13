import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];
  cartItemCounter: number = 0;

  constructor() { }

  addItemToCart(item: Product){
    this.cartItems.push(item);
    console.log(this.cartItems);
    this.cartItemCounter++;
  }

  getCartItems(){
    return this.cartItems;
  }

  calculateTotal(){
    let totalPrice = 0;
    this.cartItems.forEach((el) => {
      totalPrice += el.price;
    })
    return totalPrice;
  }

}
