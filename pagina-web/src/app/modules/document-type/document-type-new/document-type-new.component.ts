import { Component, OnInit } from "@angular/core";
import { DocumentTypeService } from "src/app/services/document-type.service";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";

@Component({
  selector: "app-document-type-new",
  templateUrl: "./document-type-new.component.html",
  styleUrls: ["./document-type-new.component.scss"],
})
export class DocumentTypeNewComponent implements OnInit {
  public documentType: DocumentTypeModel;

  constructor(private _documentypeService: DocumentTypeService) {}

  ngOnInit(): void {
    this.documentType = new DocumentTypeModel("");
  }
}
