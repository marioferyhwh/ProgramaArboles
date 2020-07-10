import { Component, OnInit } from "@angular/core";
import { CollectionService } from "src/app/services/collection.service";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-collection-select",
  templateUrl: "./collection-select.component.html",
  styleUrls: ["./collection-select.component.scss"],
})
export class CollectionSelectComponent implements OnInit {
  public collections: CollectionModel[];
  public collectionSelect: CollectionModel;
  constructor(
    private _collectionService: CollectionService,
    private _globalServer: GlobalService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.collectionSelect = this._globalServer.getVarCollection;
    this._collectionService.getList(0).subscribe(
      (res) => {
        this.collections = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  selectColletion(id: number, name: string) {
    this.collectionSelect = this._globalServer.getVarCollection;
    this.collectionSelect.id = id;
    this.collectionSelect.description = name;
    this._globalServer.varAllSave();
  }
}
