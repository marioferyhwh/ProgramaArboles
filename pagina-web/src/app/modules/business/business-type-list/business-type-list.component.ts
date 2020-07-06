import { Component, OnInit } from "@angular/core";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { BusinessTypeService } from "src/app/services/business-type.service";

@Component({
  selector: "app-business-type-list",
  templateUrl: "./business-type-list.component.html",
  styleUrls: ["./business-type-list.component.scss"],
})
export class BusinessTypeListComponent implements OnInit {
  public businessTypes: BusinessTypeModel[];

  constructor(private _businessTypeService: BusinessTypeService) {}

  ngOnInit(): void {}
}
