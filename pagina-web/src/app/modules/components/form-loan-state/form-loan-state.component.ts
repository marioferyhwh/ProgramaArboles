import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";

@Component({
  selector: "app-form-loan-state",
  templateUrl: "./form-loan-state.component.html",
  styleUrls: ["./form-loan-state.component.scss"],
})
export class FormLoanStateComponent implements OnInit {
  @Input() public data: LoanStateModel;
  @Output() public onData: EventEmitter<LoanStateModel>;
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
