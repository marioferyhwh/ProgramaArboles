import { Component, OnInit } from "@angular/core";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { DocumentTypeService } from "src/app/services/document-type.service";

@Component({
  selector: "app-document-type-list",
  templateUrl: "./document-type-list.component.html",
  styleUrls: ["./document-type-list.component.scss"],
})
export class DocumentTypeListComponent implements OnInit {
  public documentType: DocumentTypeModel[];

  constructor(private _documentTypeService: DocumentTypeService) {}

  ngOnInit(): void {
    this._documentTypeService.getList(1).subscribe(
      (res) => {
        this.documentType = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
