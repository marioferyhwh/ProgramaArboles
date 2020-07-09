import { Component, OnInit } from "@angular/core";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { BusinessTypeService } from "src/app/services/business-type.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

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
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._businessTypeService.get(params["id"]).subscribe(
        (res) => {
          this.businessType = res;
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "tipo de negocio no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._businessTypeService.routeList();
        }
      );
    });
  }

  onUpdate(c: BusinessTypeModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._businessTypeService.edit(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "tipo de negocio editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._businessTypeService.routeList();
      },
      (err) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "error",
          text: err.error.message,
          icon: "error",
        });
        toast2.fire();
        console.log({ err });
      }
    );
  }
}
