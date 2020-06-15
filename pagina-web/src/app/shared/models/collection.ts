import { BaseDB } from "./base-db";
import { CollectionCash } from "./collection-cash";
import { Expense } from "./expense";
import { Client } from "./client";
import { UserCollection } from "./user-collection";

export interface Collection extends BaseDB {
  description: string;
  active: boolean;
  balance_total: number;
  cashes: CollectionCash;
  expenses: Expense;
  clients: Client;
  users: UserCollection;
}
