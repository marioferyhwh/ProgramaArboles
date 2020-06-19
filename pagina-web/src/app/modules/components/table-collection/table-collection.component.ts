import { Component, OnInit, Input } from "@angular/core";
import { Collection } from "src/app/shared/models/collection";

@Component({
  selector: "app-table-collection",
  templateUrl: "./table-collection.component.html",
  styleUrls: ["./table-collection.component.scss"],
})
export class TableCollectionComponent implements OnInit {
  @Input() public cobros: Collection[];
  constructor() {}

  ngOnInit(): void {}
}
