import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ClientModel } from "src/app/shared/models/client.model";

@Component({
  selector: "app-table-client",
  templateUrl: "./table-client.component.html",
  styleUrls: ["./table-client.component.scss"],
})
export class TableClientComponent implements OnInit {
  @Input() clients: ClientModel[];
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
