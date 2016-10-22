import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { CalculateTotalPricePipe } from './calculate-total-price.pipe';
import { RouterModule }   from '@angular/router';
import { ProductComponent }   from './product.component';
import { DashboardComponent }   from './dashboard.component';
import { ProductService } from './product.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CalculateTotalPricePipe,ProductComponent, DashboardComponent,
  ],
  providers: [ProductService],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
