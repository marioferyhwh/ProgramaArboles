import { BaseDbModel } from "./base-db.model";

export class DocumentTypeModel extends BaseDbModel {
  constructor(public description: string, public name_short?: string) {
    super();
  }
}
