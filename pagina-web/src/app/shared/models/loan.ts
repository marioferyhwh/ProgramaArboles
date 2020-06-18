import { BaseDB } from "./base-db";
import { LoanState } from "./loan-state";
import { LoanPayment } from "./loan-payment";
import { Client } from "./client";
import { Collection } from "./collection";
import { User } from "./user";

export interface Loan extends BaseDB {
  initial_value: number;
  interest: number;
  quota: number;
  balance: number;
  id_loan_state: number;
  id_client?: number;
  id_collection?: number;
  id_user?: number;
  loan_state: LoanState;
  payments: LoanPayment[];
  client?: Client;
  collection?: Collection;
  user?: User;
}
