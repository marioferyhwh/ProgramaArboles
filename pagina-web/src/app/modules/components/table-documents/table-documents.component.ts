import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";

@Component({
  selector: "app-table-documents",
  templateUrl: "./table-documents.component.html",
  styleUrls: ["./table-documents.component.scss"],
})
export class TableDocumentsComponent implements OnInit {
  @Input() data: DocumentTypeModel[];
  @Output() edit: EventEmitter<number>;
  @Output() delete: EventEmitter<number>;
  constructor() {}

  ngOnInit(): void {}

  removeItem(id: number) {}
  selectItem(id: number) {}
}
