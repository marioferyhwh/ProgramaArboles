import { Component, OnInit } from "@angular/core";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-collection-list",
  templateUrl: "./collection-list.component.html",
  styleUrls: ["./collection-list.component.scss"],
})
export class CollectionListComponent implements OnInit {
  public collections: CollectionModel[];

  constructor(
    private _collectionService: CollectionService,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let u = this._globalService.getVarUser;
    this._collectionService.getList(u.id).subscribe(
      (res) => {
        this.collections = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNew() {
    this._collectionService.routeNew();
  }
}
