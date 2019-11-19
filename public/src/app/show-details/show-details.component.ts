import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../Services/http-service/http.service";

@Component({
    selector: "app-show-details",
    templateUrl: "./show-details.component.html",
    styleUrls: ["./show-details.component.css"]
})
export class ShowDetailsComponent implements OnInit {
    id: any;
    details: any;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.id = params["id"];
        });
        this.productDetails(this.id);
    }

    productDetails(id: any) {
        this._httpService.productDetails(id).subscribe(data => {
            this.details = data["result"];
            console.log(this.details);
        });
    }

    deleteProduct(id: any) {
        this._httpService.deleteProduct(id).subscribe(data => {
            console.log(data);
        });
        this.goHome();
    }

    goHome() {
        this._router.navigate(["/products"]);
    }
}
