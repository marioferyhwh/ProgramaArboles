import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { GlobalService } from "src/app/services/global.service";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-form-loan",
  templateUrl: "./form-loan.component.html",
  styleUrls: ["./form-loan.component.scss"],
})
export class FormLoanComponent implements OnInit {
  @Input() public data: LoanModel;
  @Output() public onData: EventEmitter<LoanModel>;

  public forma: FormGroup;
  public loan_states: LoanStateModel[];

  constructor(private _globalService: GlobalService, private _fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {}

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
      loan_state: [
        1,
        [Validators.required, Validators.nullValidator, Validators.min(1)],
      ],
    });
  }

  initial_valueInvalid(): Boolean {
    console.log(this.forma.get("initial_value"));
    return (
      this.forma.get("initial_value").invalid &&
      this.forma.get("initial_value").touched
    );
  }

  interestInvalid(): Boolean {
    return (
      this.forma.get("interest").invalid && this.forma.get("interest").touched
    );
  }

  quotaInvalid(): Boolean {
    return this.forma.get("quota").invalid && this.forma.get("quota").touched;
  }

  loan_stateInvalid(): Boolean {
    return (
      this.forma.get("loan_state").invalid &&
      this.forma.get("loan_state").touched
    );
  }

  onAction() {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
    }

    console.log(this.forma);
    this.onData.emit(this.data);
  }
}
