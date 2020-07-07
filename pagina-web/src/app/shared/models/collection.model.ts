import { BaseDbModel } from "./base-db.model";
import { CollectionCashModel } from "./collection-cash.model";
import { ExpenseModel } from "./expense.model";
import { ClientModel } from "./client.model";
import { UserCollectionModel } from "./user-collection.model";

export class CollectionModel extends BaseDbModel {
  description: string;
  actived: boolean;
  balance_total: number;
  cashes?: CollectionCashModel;
  expenses?: ExpenseModel;
  clients?: ClientModel;
  users?: UserCollectionModel;
}
