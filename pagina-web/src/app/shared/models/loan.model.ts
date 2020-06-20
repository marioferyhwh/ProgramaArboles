import { BaseDbModel } from "./base-db.model";
import { ClientModel } from "./client.model";
import { CollectionModel } from "./collection.model";
import { UserModel } from "./user.model";
import { LoanPaymentModel } from "./loan-payment.model";
import { LoanStateModel } from "./loan-state.model";

export class LoanModel extends BaseDbModel {
  initial_value: number;
  interest: number;
  quota: number;
  balance: number;
  id_loan_state: number;
  id_client: number;
  id_collection: number;
  id_user: number;
  loan_state: LoanStateModel;
  payments: LoanPaymentModel[];
  client: ClientModel;
  collection: CollectionModel;
  user: UserModel;
}
