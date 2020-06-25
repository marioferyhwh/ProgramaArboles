import { BaseDbModel } from "./base-db.model";

export class LoanStateModel extends BaseDbModel {
  constructor(public state: string) {
    super();
  }
}
