import { Component, OnInit, Input } from "@angular/core";
import { LoanPaymentModel } from "src/app/shared/models/loan-payment.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-loan-payment",
  templateUrl: "./table-loan-payment.component.html",
  styleUrls: ["./table-loan-payment.component.scss"],
})
export class TableLoanPaymentComponent implements OnInit {
  @Input() data: LoanPaymentModel[];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  deleteItem(id: number) {}
  selectItem(id: number) {
    this._router.navigate(["/prestamo", "pago", id, "editar"]);
  }
  editItem(id: number) {
    this._router.navigate(["/prestamo", "pago", id]);
  }
}
