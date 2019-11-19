import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../Services/http-service/http.service";

@Component({
    selector: "app-show-products",
    templateUrl: "./show-products.component.html",
    styleUrls: ["./show-products.component.css"]
})
export class ShowProductsComponent implements OnInit {
    products: any;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this.allProducts();
    }

    allProducts() {
        this._httpService.allProducts().subscribe(data => {
            console.log(data["result"]);
            this.products = data["result"];
        });
    }
}
