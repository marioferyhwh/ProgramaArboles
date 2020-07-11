import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { LoanService } from "src/app/services/loan.service";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { LoanModel } from "src/app/shared/models/loan.model";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-form-loan-payment",
  templateUrl: "./form-loan-payment.component.html",
  styleUrls: ["./form-loan-payment.component.scss"],
})
export class FormLoanPaymentComponent implements OnInit {
  @Input() public data: LoanPaymentModel;
  @Input() public collections: CollectionModel[];
  @Input() public users: UserModel[];
  @Input() public loans: LoanModel[];
  @Output() public onData: EventEmitter<LoanPaymentModel>;

  public forma: FormGroup;
  public debug: boolean;

  constructor(
    private _globalService: GlobalService,
    private _fb: FormBuilder,
    private _loanService: LoanService
  ) {
    this.debug = false;
    this.onData = new EventEmitter();
    this.initForm();
  }

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(this.collections);

    console.log(this.data);
    this.dataForm();
  }

  dataForm() {
    if (this.data != null) {
      this.forma.reset({ ...this.data });
      if (this.data.id != null) {
        this.forma.get("id_loan").disable();
      }
    }
    this.forma.get("id").disable();
    this.forma.get("id_user").disable();
    this.forma.get("id_collection").disable();
  }
  onAction() {
    console.log(this.forma);
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    this.forma.value["id_loan"] = parseInt(this.forma.value["id_loan"]);
    const d = <LoanPaymentModel>this.forma.value;
    d.id = this.data.id;
    d.id_user = this.data.id_user;
    d.id_collection = this.data.id_collection;
    this.onData.emit(d);
  }

  initForm() {
    this.forma = this._fb.group({
      id: [],
      id_loan: [0, Validators.required],
      money: [0, [Validators.required, Validators.min(1)]],
      id_user: [0, Validators.required],
      id_collection: [0, Validators.required],
    });
  }

  cancel() {
    this._loanService.routeSee(this.data.id_loan);
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
