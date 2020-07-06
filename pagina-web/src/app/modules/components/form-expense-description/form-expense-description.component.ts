import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ExpenseDescriptionModel } from "src/app/shared/models/expense-description.model";

@Component({
  selector: "app-form-expense-description",
  templateUrl: "./form-expense-description.component.html",
  styleUrls: ["./form-expense-description.component.scss"],
})
export class FormExpenseDescriptionComponent implements OnInit {
  @Input() public data: ExpenseDescriptionModel;
  @Output() public onData: EventEmitter<ExpenseDescriptionModel>;
  public forma: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.onData = new EventEmitter();
  }

  ngOnInit(): void {}
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
    });
  }
}
