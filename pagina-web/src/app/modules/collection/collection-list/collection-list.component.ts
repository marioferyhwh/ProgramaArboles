import { Component, OnInit } from "@angular/core";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";

@Component({
  selector: "app-collection-list",
  templateUrl: "./collection-list.component.html",
  styleUrls: ["./collection-list.component.scss"],
})
export class CollectionListComponent implements OnInit {
  public collections: CollectionModel[];

  constructor(private _clientService: CollectionService) {}

  ngOnInit(): void {}
}
