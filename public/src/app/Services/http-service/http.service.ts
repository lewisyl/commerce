import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class HttpService {
    constructor(private _http: HttpClient) {}

    allProducts() {
        return this._http.get("/exp-products");
    }

    newProduct(newProduct: any) {
        return this._http.post("/exp-products/new", newProduct);
    }

    productDetails(id: any) {
        return this._http.get(`/exp-products/${id}`);
    }

    updateProduct(id: any, updateProduct: any) {
        return this._http.put(`/exp-products/edit/${id}`, updateProduct);
    }

    deleteProduct(id: any) {
        return this._http.delete(`/exp-products/${id}`);
    }
}
