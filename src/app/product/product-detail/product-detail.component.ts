import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: any;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getDetail();
  }
  getDetail() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id: number = Number(paramMap.get('id'));
      this.productDetail = this.productService.findById(id);
    });
  }
}
