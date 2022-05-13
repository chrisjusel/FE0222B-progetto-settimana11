import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interface/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartSrv: CartService) { }

  @ViewChild('f', {static: true}) form!: NgForm

  ngOnInit(): void {
  }

  getCartItems(){
    return this.cartSrv.cartItems;
  }

  deleteItemFromCart(i: number){
    this.cartSrv.deleteItemFromCart(i);
  }

  calculateTotal(){
    return this.cartSrv.calculateTotal();
  }

  submit(){
    this.cartSrv.cartItems = [];
    this.cartSrv.cartItemCounter = 0;
    alert("Ordine effettuato con successo");
  }
}
