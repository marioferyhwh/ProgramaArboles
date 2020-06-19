import { Component, OnInit, Input } from "@angular/core";
import { CollectionCash } from "src/app/shared/models/collection-cash";

@Component({
  selector: "app-table-cash",
  templateUrl: "./table-cash.component.html",
  styleUrls: ["./table-cash.component.scss"],
})
export class TableCashComponent implements OnInit {
  @Input() public movimentos: CollectionCash[];
  constructor() {}

  ngOnInit(): void {}
}
