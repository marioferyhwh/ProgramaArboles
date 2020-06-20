import { Component, OnInit, Input } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";

@Component({
  selector: "app-table-cash",
  templateUrl: "./table-cash.component.html",
  styleUrls: ["./table-cash.component.scss"],
})
export class TableCashComponent implements OnInit {
  @Input() public movimentos: CollectionCashModel[];
  constructor() {}

  ngOnInit(): void {}
}
