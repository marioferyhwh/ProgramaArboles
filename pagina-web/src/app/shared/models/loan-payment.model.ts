import { BaseDbModel } from "./base-db.model";
import { UserModel } from "./user.model";

export class LoanPaymentModel extends BaseDbModel {
  id_loan: number;
  money: number;
  id_user: number;
  id_collection: number;
  user_create: UserModel;
}
