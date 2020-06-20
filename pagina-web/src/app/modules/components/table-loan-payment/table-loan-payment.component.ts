import { Component, OnInit, Input } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";

@Component({
  selector: "app-table-loan-payment",
  templateUrl: "./table-loan-payment.component.html",
  styleUrls: ["./table-loan-payment.component.scss"],
})
export class TableLoanPaymentComponent implements OnInit {
  @Input() public prestamo_pagados: LoanPaymentModel[];
  constructor() {}

  ngOnInit(): void {}
}
