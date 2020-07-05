import { Component, OnInit } from "@angular/core";
import { LoanModel } from "src/app/shared/models/loan.model";

@Component({
  selector: "app-loan-new",
  templateUrl: "./loan-new.component.html",
  styleUrls: ["./loan-new.component.scss"],
})
export class LoanNewComponent implements OnInit {
  loan: LoanModel;
  constructor() {}

  ngOnInit(): void {}
}
