import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-documents",
  templateUrl: "./form-documents.component.html",
  styleUrls: ["./form-documents.component.scss"],
})
export class FormDocumentsComponent implements OnInit {
  @Input() public data: DocumentTypeModel;
  @Output() public onData: EventEmitter<DocumentTypeModel>;

  public forma: FormGroup;
  public debug: boolean;

  constructor(private _fb: FormBuilder, private _router: Router) {
    this.debug = false;
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
      description: ["", Validators.required],
      name_short: ["", Validators.required],
    });
  }

  cancel() {
    this._router.navigate(["/documento"]);
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }
  get descriptionInvalid(): boolean {
    return this.InvalidField("description");
  }
  get name_shortInvalid(): boolean {
    return this.InvalidField("name_short");
  }
}
