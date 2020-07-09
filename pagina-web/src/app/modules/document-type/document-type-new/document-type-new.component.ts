import { Component, OnInit } from "@angular/core";
import { DocumentTypeService } from "src/app/services/document-type.service";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-document-type-new",
  templateUrl: "./document-type-new.component.html",
  styleUrls: ["./document-type-new.component.scss"],
})
export class DocumentTypeNewComponent implements OnInit {
  public documentType: DocumentTypeModel;

  constructor(private _documentTypeService: DocumentTypeService) {}

  ngOnInit(): void {
    this.documentType = new DocumentTypeModel("");
  }

  onCreate(data: DocumentTypeModel) {
    const toast = Swal.mixin({
      allowOutsideClick: false,
      text: "espere por favor",
      icon: "info",
    });
    toast.fire();
    toast.showLoading();
    console.log(data);
    this._documentTypeService.create(data).subscribe(
      (resp) => {
        toast.close();
        const toast2 = Swal.mixin({
          title: "tipo de documento creado",
          text: "",
          icon: "success",
        });
        toast2.fire();
        this._documentTypeService.routeList();
      },
      (err) => {
        const toast = Swal.mixin({
          title: "error al crear tipo de documento",
          text: err["error"].message,
          icon: "error",
        });
        toast.fire();
      }
    );
  }
}
