import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  private products!: Product[];

  constructor(private productsSrv: ProductsService, private cartSrc: CartService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsSrv.fetchProducts().subscribe((ris) => {
      this.products = ris;
      console.log(this.products);
    })
  }

  getProducts(){
    return this.products;
  }

  getProductById(id: number){
    for(let i=0; i<this.products.length; i++){
      if(this.products[i].id == id) return this.products[i]
    }
    return null;
  }

  addItemToCart(id: number){
    let itemToAdd: Product | null = this.getProductById(id);
    if(itemToAdd){
      this.cartSrc.addItemToCart(itemToAdd);
    }
  }
}
