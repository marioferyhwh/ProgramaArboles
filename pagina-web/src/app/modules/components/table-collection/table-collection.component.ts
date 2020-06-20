import { Component, OnInit, Input } from "@angular/core";
import { CollectionModel } from "src/app/shared/models/collection.model";

@Component({
  selector: "app-table-collection",
  templateUrl: "./table-collection.component.html",
  styleUrls: ["./table-collection.component.scss"],
})
export class TableCollectionComponent implements OnInit {
  @Input() public cobros: CollectionModel[];
  constructor() {}

  ngOnInit(): void {}
}
