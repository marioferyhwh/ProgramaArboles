import { BaseDbModel } from "./base-db.model";
import { ExpenseDescriptionModel } from "./expense-description.model";

export class ExpenseModel extends BaseDbModel {
  money: number;
  id_expense: number;
  id_user: number;
  id_collection: number;
  description: ExpenseDescriptionModel;
}
