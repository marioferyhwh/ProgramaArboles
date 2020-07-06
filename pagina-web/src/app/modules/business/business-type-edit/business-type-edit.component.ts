import { Component, OnInit } from "@angular/core";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { BusinessTypeService } from "src/app/services/business-type.service";

@Component({
  selector: "app-business-type-edit",
  templateUrl: "./business-type-edit.component.html",
  styleUrls: ["./business-type-edit.component.scss"],
})
export class BusinessTypeEditComponent implements OnInit {
  public businessType: BusinessTypeModel;

  constructor(private _businessTypeService: BusinessTypeService) {}

  ngOnInit(): void {}
}
