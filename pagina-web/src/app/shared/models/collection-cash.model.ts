import { BaseDbModel } from "./base-db.model";

export class CollectionCashModel extends BaseDbModel {
  id_collection: number;
  id_user: number;
  money: number;
}
