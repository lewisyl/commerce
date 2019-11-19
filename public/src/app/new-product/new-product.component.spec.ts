import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpService } from "../Services/http-service/http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { NewProductComponent } from "./new-product.component";

describe("NewProductComponent", () => {
    let component: NewProductComponent;
    let fixture: ComponentFixture<NewProductComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewProductComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
