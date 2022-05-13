import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private cartSrv: CartService) { }

  ngOnInit(): void {
  }

  getCartItemCounter(){
    return this.cartSrv.cartItemCounter;
  }

}
