import { Component, OnInit } from "@angular/core";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { BusinessTypeService } from "src/app/services/business-type.service";

@Component({
  selector: "app-business-type-new",
  templateUrl: "./business-type-new.component.html",
  styleUrls: ["./business-type-new.component.scss"],
})
export class BusinessTypeNewComponent implements OnInit {
  public businessType: BusinessTypeModel;

  constructor(private _businessTypeService: BusinessTypeService) {}

  ngOnInit(): void {
    this.businessType = new BusinessTypeModel("");
  }
}
