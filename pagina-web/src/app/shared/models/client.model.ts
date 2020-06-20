import { BaseDbModel } from "./base-db.model";
import { LoanStateModel } from "./loan-state.model";
import { BusinessTypeModel } from "./business-type.model";
import { ClientLocationModel } from "./client-location.model";
import { UserModel } from "./user.model";
import { TelModel } from "./tel.model";
import { LoanModel } from "./loan.model";

export class ClientModel extends BaseDbModel {
  name: string;
  email: string;
  document_code: string;
  document: string;
  adress: string;
  number_loans: number;
  id_collection: number;
  id_loan_state: number;
  id_type_business: number;
  id_location: number;
  id_user: number;
  state: LoanStateModel;
  bussiness: BusinessTypeModel;
  location: ClientLocationModel;
  user_create: UserModel;
  tels_delete: TelModel;
  tels_new: TelModel;
  tels: TelModel;
  loans: LoanModel;
}
