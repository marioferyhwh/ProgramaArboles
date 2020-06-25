import { BaseDbModel } from "./base-db.model";

export class TelDescriptionModel extends BaseDbModel {
  constructor(public tel_description: string) {
    super();
  }
}
