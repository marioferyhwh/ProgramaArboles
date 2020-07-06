import { Component, OnInit } from "@angular/core";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { CollectionService } from "src/app/services/collection.service";

@Component({
  selector: "app-collection-new",
  templateUrl: "./collection-new.component.html",
  styleUrls: ["./collection-new.component.scss"],
})
export class CollectionNewComponent implements OnInit {
  public collection: CollectionModel;

  constructor(private _clientService: CollectionService) {}

  ngOnInit(): void {}
}
