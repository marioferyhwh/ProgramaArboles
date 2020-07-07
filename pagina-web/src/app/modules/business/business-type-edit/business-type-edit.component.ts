import { Component, OnInit } from "@angular/core";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { BusinessTypeService } from "src/app/services/business-type.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-business-type-edit",
  templateUrl: "./business-type-edit.component.html",
  styleUrls: ["./business-type-edit.component.scss"],
})
export class BusinessTypeEditComponent implements OnInit {
  public businessType: BusinessTypeModel;

  constructor(
    private _businessTypeService: BusinessTypeService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._businessTypeService.get(params["id"]).subscribe(
        (res) => {
          this.businessType = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
