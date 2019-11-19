import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpService } from "./Services/http-service/http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { ShowProductsComponent } from "./show-products/show-products.component";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";

@NgModule({
    declarations: [
        AppComponent,
        ShowProductsComponent,
        ShowDetailsComponent,
        NewProductComponent,
        UpdateProductComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {}
