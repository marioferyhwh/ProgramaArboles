import { Component, OnInit } from "@angular/core";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { BusinessTypeService } from "src/app/services/business-type.service";
import Swal from "sweetalert2";

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

  onCreate(data) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._businessTypeService.create(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "negocio creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._businessTypeService.routeList();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear negocio",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
