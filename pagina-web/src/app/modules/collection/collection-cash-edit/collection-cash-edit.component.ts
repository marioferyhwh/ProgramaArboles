import { Component, OnInit } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";

@Component({
  selector: "app-collection-cash-edit",
  templateUrl: "./collection-cash-edit.component.html",
  styleUrls: ["./collection-cash-edit.component.scss"],
})
export class CollectionCashEditComponent implements OnInit {
  public cash: CollectionCashModel;

  constructor(private _clientService: CollectionService) {}

  ngOnInit(): void {}
}
