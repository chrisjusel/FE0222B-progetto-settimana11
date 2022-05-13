import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product!: Product | any;
  sub!: Subscription;

  constructor(private router: ActivatedRoute, private productsSrv: ProductsService, private cartSrv: CartService) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.product = this.fetchProductById(id);
    })
  }

  fetchProductById(id: number){
    this.productsSrv.fetchProductById(id).subscribe((ris) => {
      this.product = ris;
    })
  }

  addItemToCart(id: number){
    this.cartSrv.addItemToCart(this.product);
  }


}
