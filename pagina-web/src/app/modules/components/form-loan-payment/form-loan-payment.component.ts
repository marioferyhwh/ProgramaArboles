import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";

@Component({
  selector: "app-form-loan-payment",
  templateUrl: "./form-loan-payment.component.html",
  styleUrls: ["./form-loan-payment.component.scss"],
})
export class FormLoanPaymentComponent implements OnInit {
  @Input() public data: LoanPaymentModel;
  @Output() public onData: EventEmitter<LoanPaymentModel>;
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
