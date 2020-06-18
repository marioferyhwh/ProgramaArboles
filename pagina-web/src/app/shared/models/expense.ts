import { BaseDB } from "./base-db";
import { ExpenseDescription } from "./expense-description";

export interface Expense extends BaseDB {
  money: number;
  id_expense: number;
  id_user: number;
  id_collection: number;
  description?: ExpenseDescription;
}
