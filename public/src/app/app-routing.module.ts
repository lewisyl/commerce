import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShowProductsComponent } from "./show-products/show-products.component";
import { ShowDetailsComponent } from "./show-details/show-details.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";

const routes: Routes = [
    { path: "products", component: ShowProductsComponent },
    { path: "products/new", component: NewProductComponent },
    { path: "products/:id", component: ShowDetailsComponent },
    { path: "products/edit/:id", component: UpdateProductComponent },
    { path: "", pathMatch: "full", redirectTo: "/products" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
