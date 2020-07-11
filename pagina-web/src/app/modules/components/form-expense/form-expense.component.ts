import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { ExpenseService } from "src/app/services/expense.service";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";

@Component({
  selector: "app-form-expense",
  templateUrl: "./form-expense.component.html",
  styleUrls: ["./form-expense.component.scss"],
})
export class FormExpenseComponent implements OnInit {
  @Input() public data: ExpenseModel;
  @Input() public collections: CollectionModel[];
  @Input() public users: UserModel[];
  @Input() public expenseDescriptions: ExpenseDescriptionModel[];
  @Output() public onData: EventEmitter<ExpenseModel>;

  public forma: FormGroup;
  public debug: boolean;

  constructor(
    private _fb: FormBuilder,
    private _expenseService: ExpenseService
  ) {
    this.debug = true;
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
      if (this.data.id != null) {
        this.forma.get("id_user").disable();
      }
    }
    this.forma.get("id").disable();
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
    this.forma.value["id_user"] = parseInt(this.forma.value["id_user"]);
    this.forma.value["id_expense"] = parseInt(this.forma.value["id_expense"]);
    const d = <ExpenseModel>this.forma.value;
    d.id = this.data.id;
    d.id_collection = this.data.id_collection;
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
    this._expenseService.routeList();
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
