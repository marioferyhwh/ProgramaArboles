import { Component, OnInit } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";

@Component({
  selector: "app-collection-cash-new",
  templateUrl: "./collection-cash-new.component.html",
  styleUrls: ["./collection-cash-new.component.scss"],
})
export class CollectionCashNewComponent implements OnInit {
  public cash: CollectionCashModel;

  constructor(private _clientService: CollectionService) {}

  ngOnInit(): void {
    this.cash = new CollectionCashModel();
  }
}
