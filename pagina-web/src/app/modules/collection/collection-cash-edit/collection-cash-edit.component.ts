import { Component, OnInit } from "@angular/core";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-collection-cash-edit",
  templateUrl: "./collection-cash-edit.component.html",
  styleUrls: ["./collection-cash-edit.component.scss"],
})
export class CollectionCashEditComponent implements OnInit {
  public cash: CollectionCashModel;

  constructor(
    private _collectionService: CollectionService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._collectionService.getCash(params["id"]).subscribe(
        (res) => {
          this.cash = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
