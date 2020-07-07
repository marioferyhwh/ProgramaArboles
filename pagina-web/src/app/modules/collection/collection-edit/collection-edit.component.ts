import { Component, OnInit } from "@angular/core";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-collection-edit",
  templateUrl: "./collection-edit.component.html",
  styleUrls: ["./collection-edit.component.scss"],
})
export class CollectionEditComponent implements OnInit {
  public collection: CollectionModel;

  constructor(
    private _collectionService: CollectionService,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activedRoute.params.subscribe((params) => {
      this._collectionService.get(params["id"]).subscribe(
        (res) => {
          this.collection = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
