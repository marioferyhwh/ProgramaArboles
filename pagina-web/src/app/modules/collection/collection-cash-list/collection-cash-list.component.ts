import { Component, OnInit } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";

@Component({
  selector: "app-collection-cash-list",
  templateUrl: "./collection-cash-list.component.html",
  styleUrls: ["./collection-cash-list.component.scss"],
})
export class CollectionCashListComponent implements OnInit {
  public cashes: CollectionCashModel[];

  constructor(private _clientService: CollectionService) {}

  ngOnInit(): void {}
}
