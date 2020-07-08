import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
@Component({
  selector: "app-form-cash",
  templateUrl: "./form-cash.component.html",
  styleUrls: ["./form-cash.component.scss"],
})
export class FormCashComponent implements OnInit {
  @Input() public data: CollectionCashModel;
  @Output() public onData: EventEmitter<CollectionCashModel>;
  public forma: FormGroup;
  

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
