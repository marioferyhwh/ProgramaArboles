import { Component, OnInit, Input } from "@angular/core";
import { LoanPayment } from "src/app/shared/models/loan-payment";
import { Loan } from "src/app/shared/models/loan";

@Component({
  selector: "app-table-loan",
  templateUrl: "./table-loan.component.html",
  styleUrls: ["./table-loan.component.scss"],
})
export class TableLoanComponent implements OnInit {
  @Input() public prestamos: Loan[];
  constructor() {}

  ngOnInit(): void {}
}
