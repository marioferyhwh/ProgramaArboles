import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-business-type",
  templateUrl: "./form-business-type.component.html",
  styleUrls: ["./form-business-type.component.scss"],
})
export class FormBusinessTypeComponent implements OnInit {
  @Input() public data: BusinessTypeModel;
  @Output() public onData: EventEmitter<BusinessTypeModel>;

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
      type_business: ["", Validators.required],
    });
  }

  cancel() {
    this._router.navigate(["/negocio"]);
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get type_businessInvalid(): boolean {
    return this.InvalidField("type_business");
  }
}
