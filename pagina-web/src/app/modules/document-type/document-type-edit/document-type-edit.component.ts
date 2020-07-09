import { Component, OnInit } from "@angular/core";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { DocumentTypeService } from "src/app/services/document-type.service";
import { ActivatedRoute } from "@angular/router";

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
    this._activedRoute.params.subscribe((params) => {
      this._documentTypeService.get(params["id"]).subscribe(
        (res) => {
          this.documentType = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
