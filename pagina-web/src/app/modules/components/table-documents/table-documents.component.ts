import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { DocumentTypeService } from "src/app/services/document-type.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-table-documents",
  templateUrl: "./table-documents.component.html",
  styleUrls: ["./table-documents.component.scss"],
})
export class TableDocumentsComponent implements OnInit {
  @Input() data: DocumentTypeModel[];
  @Input() edit: boolean;
  @Output() onReload: EventEmitter<string>;
  public debug: boolean;

  constructor(
    private _router: Router,
    private _documentTypeService: DocumentTypeService
  ) {
    this.edit = false;
    this.onReload = new EventEmitter();
  }

  ngOnInit(): void {}

  deleteItem(id: number) {
    const toast = Swal.mixin({
      title: "SEGURO",
      text: "no se podra revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, borrar!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });
    toast.fire().then((result) => {
      if (result.value) {
        this._documentTypeService.delete(id).subscribe(
          (resp) => {
            const toast = Swal.mixin({
              title: "BORRADO",
              text: "tipo de documento borrado",
              icon: "success",
            });
            toast.fire();
            this.onReload.emit("");
            console.log(resp);
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        const toast = Swal.mixin({
          title: "CANCELADO",
          text: "tipo de documento esta asalvo",
          icon: "error",
        });
        toast.fire();
      }
    });
  }
  selectItem(id: number) {
    this._router.navigate(["/documento", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/documento", id]);
  }
}
