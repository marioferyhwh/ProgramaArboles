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

  constructor(private _collectionservice: CollectionService) {}

  ngOnInit(): void {
    this._collectionservice.getCashList(1).subscribe(
      (res) => {
        this.cashes = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onNew() {
    this._collectionservice.routeNewcash();
  }
}
