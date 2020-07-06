import { Component, OnInit } from "@angular/core";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";

@Component({
  selector: "app-collection-edit",
  templateUrl: "./collection-edit.component.html",
  styleUrls: ["./collection-edit.component.scss"],
})
export class CollectionEditComponent implements OnInit {
  public collection: CollectionModel;

  constructor(private _clientService: CollectionService) {}

  ngOnInit(): void {}
}
