import { Component, OnInit, Input } from "@angular/core";
import { Loan } from "src/app/shared/models/loan";
import { LoanPayment } from "src/app/shared/models/loan-payment";

@Component({
  selector: "app-table-loan-payment",
  templateUrl: "./table-loan-payment.component.html",
  styleUrls: ["./table-loan-payment.component.scss"],
})
export class TableLoanPaymentComponent implements OnInit {
  @Input() public prestamo_pagados: LoanPayment[];
  constructor() {}

  ngOnInit(): void {}
}
