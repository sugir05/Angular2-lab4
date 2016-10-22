import { Product } from './Product';
import { ProductService } from './Product.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { CalculateTotalPricePipe } from './calculate-total-price.pipe';

@Component({
    moduleId: module.id,
    selector: 'my-product-detail',
    templateUrl: 'product-detail.component.html'
})


export class ProductDetailComponent implements OnInit{
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.productService.getProduct(id)
                .then(product => this.product = product);
        });
    }

    goBack(): void {
        this.location.back();
    }

    @Input()
    product: Product;
    quantity=1;
}
