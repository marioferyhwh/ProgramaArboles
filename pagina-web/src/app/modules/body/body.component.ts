import { Component, OnInit } from "@angular/core";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
})
export class BodyComponent implements OnInit {
  public collectionSelect: CollectionModel;
  constructor(private _globalService: GlobalService) {}

  ngOnInit(): void {}
  ngOnChanges(): void {}
  ngDoCheck(): void {
    this.collectionSelect = this._globalService.getVarCollection;
  }
}
