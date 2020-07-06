import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";

@Component({
  selector: "app-table-documents",
  templateUrl: "./table-documents.component.html",
  styleUrls: ["./table-documents.component.scss"],
})
export class TableDocumentsComponent implements OnInit {
  @Input() data: DocumentTypeModel[];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteItem(id: number) {}
  selectItem(id: number) {
    this._router.navigate(["/negocio", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/negocio", id]);
  }
}
