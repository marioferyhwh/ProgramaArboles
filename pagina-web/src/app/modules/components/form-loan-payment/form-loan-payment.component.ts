import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-loan-payment",
  templateUrl: "./form-loan-payment.component.html",
  styleUrls: ["./form-loan-payment.component.scss"],
})
export class FormLoanPaymentComponent implements OnInit {
  @Input() public data: LoanPaymentModel;
  @Output() public onData: EventEmitter<LoanPaymentModel>;

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
    this.forma.get("id_loan").disable;
    this.forma.get("id_user").disable;
    this.forma.get("id_collection").disable;
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
      id_loan: [0, Validators.required],
      money: [0, Validators.required],
      id_user: [0, Validators.required],
      id_collection: [0, Validators.required],
    });
  }

  cancel() {
    this._router.navigate(["/prestamo/pago"]);
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get id_loanInvalid(): boolean {
    return this.InvalidField("id_loan");
  }
  get moneyInvalid(): boolean {
    return this.InvalidField("money");
  }
  get id_userInvalid(): boolean {
    return this.InvalidField("id_user");
  }
  get id_collectionInvalid(): boolean {
    return this.InvalidField("id_collection");
  }
}
