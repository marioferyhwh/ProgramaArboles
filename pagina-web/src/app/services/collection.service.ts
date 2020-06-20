import { Injectable } from "@angular/core";
import { CollectionModel } from "../shared/models/collection.model";

@Injectable({
  providedIn: "root",
})
export class CollectionService {
  public collection: CollectionModel[];
  constructor() {}
}
