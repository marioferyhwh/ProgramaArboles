import { Injectable } from "@angular/core";
import { BusinessTypeModel } from "../shared/models/business-type.model";

@Injectable({
  providedIn: "root",
})
export class BusinessTypeService {
  public business: BusinessTypeModel[];
  constructor() {}
}
