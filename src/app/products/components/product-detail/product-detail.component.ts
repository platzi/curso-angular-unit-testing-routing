import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Product } from '../../../models/product.model'
import { ProductsService } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params) => {
        const productId = params.get('id');
        if (productId) {
          this.getProductDetail(productId);
        } else {
          this.goToBack();
        }
      });
  }

  private getProductDetail(productId: string) {
    this.productsService.getOne(productId)
    .subscribe({
      next: (product) => {
        this.product = product;
      },
      error: () => {
        this.goToBack();
      }
    })
  }

  goToBack() {
    this.location.back();
  }

}
