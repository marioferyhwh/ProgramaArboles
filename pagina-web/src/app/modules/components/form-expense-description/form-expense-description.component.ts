import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";
import { ExpenseService } from "src/app/services/expense.service";
import { CollectionModel } from "src/app/shared/models/collection.model";

@Component({
  selector: "app-form-expense-description",
  templateUrl: "./form-expense-description.component.html",
  styleUrls: ["./form-expense-description.component.scss"],
})
export class FormExpenseDescriptionComponent implements OnInit {
  @Input() public data: ExpenseDescriptionModel;
  @Input() public collections: CollectionModel[];
  @Output() public onData: EventEmitter<ExpenseDescriptionModel>;

  public forma: FormGroup;
  public debug: boolean;

  constructor(
    private _fb: FormBuilder,
    private _expenseService: ExpenseService
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
    const d = <ExpenseDescriptionModel>this.forma.value;
    d.id = this.data.id;
    d.id_collection = this.data.id_collection;
    this.onData.emit(d);
  }
  initForm() {
    this.forma = this._fb.group({
      id: [],
      id_collection: [0, [Validators.required]],
      description: [
        0,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(11),
        ],
      ],
    });
  }

  cancel() {
    this._expenseService.routeListdescription();
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get id_collectionInvalid(): boolean {
    return this.InvalidField("id_collection");
  }
  get descriptionInvalid(): boolean {
    return this.InvalidField("description");
  }
}
