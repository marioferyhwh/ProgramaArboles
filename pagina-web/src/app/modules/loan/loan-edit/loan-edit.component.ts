import { Component, OnInit } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { LoanService } from "src/app/services/loan.service";

@Component({
  selector: "app-loan-edit",
  templateUrl: "./loan-edit.component.html",
  styleUrls: ["./loan-edit.component.scss"],
})
export class LoanEditComponent implements OnInit {
  public loan: LoanModel;

  constructor(private _clientService: LoanService) {}

  ngOnInit(): void {}
}
