import { BaseDB } from "./base-db";
import { User } from "./user";

export interface LoanPayment extends BaseDB {
  id_loan: number;
  money: number;
  id_user: number;
  id_collection: number;
  user_create?: User;
}
