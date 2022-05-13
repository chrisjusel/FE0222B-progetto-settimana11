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
  }

  getCartItems(){
    return this.cartItems;
  }
}
