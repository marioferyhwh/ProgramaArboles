import { Component, OnInit, Input } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";

@Component({
  selector: "app-table-loan",
  templateUrl: "./table-loan.component.html",
  styleUrls: ["./table-loan.component.scss"],
})
export class TableLoanComponent implements OnInit {
  @Input() public prestamos: LoanModel[];
  constructor() {}

  ngOnInit(): void {}
}
