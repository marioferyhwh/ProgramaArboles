import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { GlobalService } from "src/app/services/global.service";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-loan",
  templateUrl: "./form-loan.component.html",
  styleUrls: ["./form-loan.component.scss"],
})
export class FormLoanComponent implements OnInit {
  @Input() public data: LoanModel;
  @Output() public onData: EventEmitter<LoanModel>;

  public forma: FormGroup;
  public debug: boolean;
  public loan_states: LoanStateModel[];

  constructor(
    private _globalService: GlobalService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
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
    this.forma.get("id").disable();
    this.forma.get("balance").disable();
    this.forma.get("id_client").disable();
    this.forma.get("id_collection").disable();
    this.forma.get("id_user").disable();
  }

  onAction() {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
    }

    console.log(this.forma);
    const d = <LoanModel>this.forma.value;
    d.id = this.data.id;
    this.onData.emit(d);
  }

  initForm() {
    this.data = new LoanModel();
    this._globalService.get().subscribe((dt) => {
      console.log({ dt });
      this.loan_states = dt.loan_states;
      // this.loan_states.unshift({
      //   id: 0,
      //   state: "-- selecione Estado --",
      // });
    });
    this.forma = this._fb.group({
      initial_value: ["", [Validators.required, Validators.min(5)]],
      interest: [
        20,
        [Validators.required, Validators.min(10), Validators.max(100)],
      ],
      quota: [
        30,
        [Validators.required, Validators.min(1), Validators.max(120)],
      ],
      balance: [0, [Validators.required]],
      id_loan_state: [0, [Validators.required, Validators.min(1)]],
      id_client: [0, [Validators.required, Validators.min(1)]],
      id_collection: [0, [Validators.required, Validators.min(1)]],
      id_user: [0, [Validators.required, Validators.min(1)]],
    });
  }

  cancel() {
    this._router.navigate(["/prestamo"]);
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get initial_valueInvalid(): boolean {
    return this.InvalidField("initial_value");
  }
  get interestInvalid(): boolean {
    return this.InvalidField("interest");
  }
  get quotaInvalid(): boolean {
    return this.InvalidField("quota");
  }
  get balanceInvalid(): boolean {
    return this.InvalidField("balance");
  }
  get id_loan_stateInvalid(): boolean {
    return this.InvalidField("id_loan_state");
  }
  get id_clientInvalid(): boolean {
    return this.InvalidField("id_client");
  }
  get id_collectionInvalid(): boolean {
    return this.InvalidField("id_collection");
  }
  get id_userInvalid(): boolean {
    return this.InvalidField("id_user");
  }
}
