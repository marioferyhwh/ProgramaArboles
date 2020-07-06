import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ExpenseModel } from "src/app/shared/models/expense.model";

@Component({
  selector: "app-form-expense",
  templateUrl: "./form-expense.component.html",
  styleUrls: ["./form-expense.component.scss"],
})
export class FormExpenseComponent implements OnInit {
  @Input() public data: ExpenseModel;
  @Output() public onData: EventEmitter<ExpenseModel>;
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
