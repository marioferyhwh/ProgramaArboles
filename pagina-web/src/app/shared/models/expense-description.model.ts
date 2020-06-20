import { BaseDbModel } from "./base-db.model";

export class ExpenseDescriptionModel extends BaseDbModel {
  id_collection: number;
  description: string;
}
