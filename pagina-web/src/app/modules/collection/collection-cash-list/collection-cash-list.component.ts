import { Component, OnInit } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-collection-cash-list",
  templateUrl: "./collection-cash-list.component.html",
  styleUrls: ["./collection-cash-list.component.scss"],
})
export class CollectionCashListComponent implements OnInit {
  public cashes: CollectionCashModel[];

  constructor(
    private _collectionservice: CollectionService,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let c = this._globalService.getVarCollection;
    this._collectionservice.getCashList(c.id).subscribe(
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
