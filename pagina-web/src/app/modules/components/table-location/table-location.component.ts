import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ClientLocationModel } from "src/app/shared/models/client-location.model";

@Component({
  selector: "app-table-location",
  templateUrl: "./table-location.component.html",
  styleUrls: ["./table-location.component.scss"],
})
export class TableLocationComponent implements OnInit {
  @Input() data: ClientLocationModel[];
  @Output() edit: EventEmitter<number>;
  @Output() delete: EventEmitter<number>;
  constructor() {}

  ngOnInit(): void {}

  removeItem(id: number) {}
  selectItem(id: number) {}
}
