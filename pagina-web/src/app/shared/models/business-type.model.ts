import { BaseDbModel } from "./base-db.model";

export class BusinessTypeModel extends BaseDbModel {
  constructor(public type_business: string) {
    super();
  }
}
