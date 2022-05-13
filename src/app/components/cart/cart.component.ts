import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private cartItems!: Product[];
  constructor(private cartSrv: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartSrv.getCartItems();
    let n: Product= {id: 5, name: "Marco", price: 3, description: "aaaaaaaaaaaaaaaaaa", image: "https://m.media-amazon.com/images/I/71D6PFi7QFL._AC_SL1500_.jpg"}
    this.cartItems.push(n);
  }

  getCartItems(){
    return this.cartItems;
  }
}
