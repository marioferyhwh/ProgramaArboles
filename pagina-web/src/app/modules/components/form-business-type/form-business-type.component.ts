import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";

@Component({
  selector: "app-form-business-type",
  templateUrl: "./form-business-type.component.html",
  styleUrls: ["./form-business-type.component.scss"],
})
export class FormBusinessTypeComponent implements OnInit {
  @Input() public data: BusinessTypeModel;
  @Output() public onData: EventEmitter<BusinessTypeModel>;
  public forma: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.onData = new EventEmitter();
  }

  ngOnInit(): void {}
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
