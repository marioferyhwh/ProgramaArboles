import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { Router } from "@angular/router";
import { invalid } from "@angular/compiler/src/render3/view/util";

@Component({
  selector: "app-form-expense",
  templateUrl: "./form-expense.component.html",
  styleUrls: ["./form-expense.component.scss"],
})
export class FormExpenseComponent implements OnInit {
  @Input() public data: ExpenseModel;
  @Output() public onData: EventEmitter<ExpenseModel>;

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
    const d = <ExpenseModel>this.forma.value;
    d.id = this.data.id;
    this.onData.emit(d);
  }
  initForm() {
    this.forma = this._fb.group({
      id: [],
      money: [0, [Validators.required, Validators.min(1)]],
      id_expense: [0, [Validators.required, Validators.min(1)]],
      id_user: [0, [Validators.required, Validators.min(1)]],
      id_collection: [0, [Validators.required, Validators.min(1)]],
    });
  }

  cancel() {
    this._router.navigate(["/gasto"]);
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get moneyInvalid(): boolean {
    return this.InvalidField("money");
  }
  get id_expenseInvalid(): boolean {
    return this.InvalidField("id_expense");
  }
  get id_userInvalid(): boolean {
    return this.InvalidField("id_user");
  }
  get id_collectionInvalid(): boolean {
    return this.InvalidField("id_collection");
  }
}
