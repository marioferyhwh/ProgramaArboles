import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Client } from "src/app/shared/models/client";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-client",
  templateUrl: "./table-client.component.html",
  styleUrls: ["./table-client.component.scss"],
})
export class TableClientComponent implements OnInit {
  @Input() clients: Client[] = [
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
  // @Output() cargarCliete: EventEmitter<number>;
  constructor(private _router: Router) {
    // this.cargarCliete = new EventEmitter();
  }

  ngOnInit(): void {}

  clientEdit(id: number) {
    // this.cargarCliete.emit(id)
    this._router.navigate(["cliente", "editar", id]);
  }
  clientView(id: number) {
    this._router.navigate(["cliente", id]);
  }
}
