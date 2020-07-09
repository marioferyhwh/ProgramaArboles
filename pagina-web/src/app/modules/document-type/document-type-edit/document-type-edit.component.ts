import { Component, OnInit } from "@angular/core";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { DocumentTypeService } from "src/app/services/document-type.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-document-type-edit",
  templateUrl: "./document-type-edit.component.html",
  styleUrls: ["./document-type-edit.component.scss"],
})
export class DocumentTypeEditComponent implements OnInit {
  public documentType: DocumentTypeModel;

  constructor(
    private _documentTypeService: DocumentTypeService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activedRoute.params.subscribe((params) => {
      this._documentTypeService.get(params["id"]).subscribe(
        (res) => {
          this.documentType = res;
          //console.log(res);
        },
        (err) => {
          const toast2 = Swal.mixin({
            title: "tipo de documento no encontredo",
            text: "",
            icon: "info",
          });
          toast2.fire();
          //console.log({ err });
          this._documentTypeService.routeList();
        }
      );
    });
  }

  onUpdate(c: DocumentTypeModel) {
    console.log({ c });
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    this._documentTypeService.edit(c).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "tipo de documento editado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._documentTypeService.routeList();
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
