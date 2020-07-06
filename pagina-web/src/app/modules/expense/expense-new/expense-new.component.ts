import { Component, OnInit } from "@angular/core";
import { ExpenseModel } from "src/app/shared/models/expense.model";
import { ExpenseService } from "src/app/services/expense.service";

@Component({
  selector: "app-expense-new",
  templateUrl: "./expense-new.component.html",
  styleUrls: ["./expense-new.component.scss"],
})
export class ExpenseNewComponent implements OnInit {
  public expense: ExpenseModel;

  constructor(private _clientService: ExpenseService) {}

  ngOnInit(): void {}
}
