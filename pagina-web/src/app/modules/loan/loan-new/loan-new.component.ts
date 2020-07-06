import { Component, OnInit } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";
import { LoanService } from "src/app/services/loan.service";

@Component({
  selector: "app-loan-new",
  templateUrl: "./loan-new.component.html",
  styleUrls: ["./loan-new.component.scss"],
})
export class LoanNewComponent implements OnInit {
  public loan: LoanModel;

  constructor(private _clientService: LoanService) {}

  ngOnInit(): void {}
}
