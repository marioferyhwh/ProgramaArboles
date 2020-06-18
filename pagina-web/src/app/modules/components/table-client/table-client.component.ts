import { Component, OnInit } from "@angular/core";
import { Client } from "src/app/shared/models/client";

@Component({
  selector: "app-table-client",
  templateUrl: "./table-client.component.html",
  styleUrls: ["./table-client.component.scss"],
})
export class TableClientComponent implements OnInit {
  public clientes: Client[] = [
    {
      id: 1,
      name: "name1",
      number_loans: 1,
      id_loan_state: 1,
    },
    {
      id: 1,
      name: "name1",
      number_loans: 1,
      id_loan_state: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
