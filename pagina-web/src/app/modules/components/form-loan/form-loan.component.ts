import { Component, OnInit, Input } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { GlobalService } from "src/app/services/global.service";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-form-loan",
  templateUrl: "./form-loan.component.html",
  styleUrls: ["./form-loan.component.scss"],
})
export class FormLoanComponent implements OnInit {
  public forma: FormGroup;
  @Input() public loan: LoanModel;
  public loan_states: LoanStateModel[];
  constructor(private _globalService: GlobalService, private _fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.loan = new LoanModel();
    this._globalService.get().subscribe((dt) => {
      console.log({ dt });
      this.loan_states = dt.loan_states;
      this.loan_states.unshift({
        //id: 0,
        state: "-- selecione Estado --",
      });
    });
    this.forma = this._fb.group({
      initial_value: [""],
      interest: [""],
      quota: [""],
      loan_state: [""],
    });
  }
  onAction() {
    console.log(this.forma);
  }
}
