import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {

    constructor(
        private router: Router,
        private productService: ProductService) {
    }
    products: Product[] = [];

    ngOnInit(): void {
        this.productService.getProducts()
            .then(products => this.products = products.slice(1, 5));
    }
    gotoDetail(product: Product): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }
}