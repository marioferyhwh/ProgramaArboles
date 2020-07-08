import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-expense-description",
  templateUrl: "./form-expense-description.component.html",
  styleUrls: ["./form-expense-description.component.scss"],
})
export class FormExpenseDescriptionComponent implements OnInit {
  @Input() public data: ExpenseDescriptionModel;
  @Output() public onData: EventEmitter<ExpenseDescriptionModel>;

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
    this.onData.emit(this.data);
  }
  initForm() {
    this.forma = this._fb.group({
      id: [],
      id_collection: [0, [Validators.required]],
      description: [0, [Validators.required]],
    });
  }

  cancel() {
    this._router.navigate(["/gasto/descripcion"]);
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
