import { BaseDB } from "./base-db";

export interface ExpenseDescription extends BaseDB {
  id_collection: number;
  description: string;
}
