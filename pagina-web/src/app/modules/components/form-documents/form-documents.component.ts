import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";

@Component({
  selector: "app-form-documents",
  templateUrl: "./form-documents.component.html",
  styleUrls: ["./form-documents.component.scss"],
})
export class FormDocumentsComponent implements OnInit {
  @Input() public data: DocumentTypeModel;
  @Output() public onData: EventEmitter<DocumentTypeModel>;
  public forma: FormGroup;
  public buttonText = "crear";

  constructor(private _fb: FormBuilder) {
    this.onData = new EventEmitter();
    this.initForm();
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.dataForm();
  }

  dataForm() {
    if (this.data != null) {
      this.forma.reset({ ...this.data });
      if (this.data.id && this.data.id != 0) {
        this.buttonText = "editar";
      }
    }
  }
  onAction() {
    console.log(this.forma);
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    this.onData.emit(this.data);
  }
  initForm() {
    this.forma = this._fb.group({
      id: [],
    });
  }
}
