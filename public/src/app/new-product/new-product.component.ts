import { Component, OnInit } from "@angular/core";
import { HttpService } from "../Services/http-service/http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: "app-new-product",
    templateUrl: "./new-product.component.html",
    styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {
    newProduct: any;
    errors: any;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this.newProduct = { name: "", quantity: null, price: null };
    }

    onSubmit() {
        this._httpService.newProduct(this.newProduct).subscribe((data: any) => {
            console.log(data);
            if (data.message == "error") {
                this.errors = data.result;
            }
            this.newProduct = { name: "", quantity: 0, price: 0 };
        });
        this.goHome();
    }

    goHome() {
        this._router.navigate(["/products"]);
    }
}
