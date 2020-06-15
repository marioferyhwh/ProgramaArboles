import { BaseDB } from "./base-db";

export interface CollectionCash extends BaseDB {
  id_collection: number;
  id_user: number;
  money: number;
}
