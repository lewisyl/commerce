import { Component, OnInit } from "@angular/core";
import { HttpService } from "../Services/http-service/http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: "app-update-product",
    templateUrl: "./update-product.component.html",
    styleUrls: ["./update-product.component.css"]
})
export class UpdateProductComponent implements OnInit {
    newProduct: any;
    id: any;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this.newProduct = { name: "", quantity: null, price: null };
        this._route.params.subscribe((params: Params) => {
            this.id = params["id"];
        });
        this.thisProduct(this.id);
    }

    thisProduct(id: any) {
        this._httpService.productDetails(id).subscribe(data => {
            this.newProduct = data["result"];
            console.log(this.newProduct);
        });
    }

    onSubmit() {
        this._httpService
            .updateProduct(this.id, this.newProduct)
            .subscribe(data => {
                console.log(data);
                this.newProduct = { name: "", quantity: null, price: null };
            });
        this.goHome();
    }

    goHome() {
        this._router.navigate(["/products"]);
    }
}
