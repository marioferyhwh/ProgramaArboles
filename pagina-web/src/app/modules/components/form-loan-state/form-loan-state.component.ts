import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-loan-state",
  templateUrl: "./form-loan-state.component.html",
  styleUrls: ["./form-loan-state.component.scss"],
})
export class FormLoanStateComponent implements OnInit {
  @Input() public data: LoanStateModel;
  @Output() public onData: EventEmitter<LoanStateModel>;
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
    this.forma.get("id").disable();
  }
  onAction() {
    console.log(this.forma);
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    const d = <LoanStateModel>this.forma.value;
    d.id = this.data.id;
    this.onData.emit(d);
  }
  initForm() {
    this.forma = this._fb.group({
      id: [],
      state: ["", Validators.required],
    });
  }

  cancel() {
    this._router.navigate(["prestamo/estado"]);
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get stateInvalid(): boolean {
    return this.InvalidField("state");
  }
}
