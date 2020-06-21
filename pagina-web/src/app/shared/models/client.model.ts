import { BaseDbModel } from "./base-db.model";
import { LoanStateModel } from "./loan-state.model";
import { BusinessTypeModel } from "./business-type.model";
import { ClientLocationModel } from "./client-location.model";
import { UserModel } from "./user.model";
import { TelModel } from "./tel.model";
import { LoanModel } from "./loan.model";

export class ClientModel extends BaseDbModel {
  constructor(
    public name?: string,
    public email?: string,
    public document_code?: string,
    public document?: string,
    public adress?: string,
    public number_loans?: number,
    public id_collection?: number,
    public id_loan_state?: number,
    public id_type_business?: number,
    public id_location?: number,
    public id_user?: number,
    public state?: LoanStateModel,
    public bussiness?: BusinessTypeModel,
    public location?: ClientLocationModel,
    public user_create?: UserModel,
    public tels_delete?: TelModel,
    public tels_new?: TelModel,
    public tels?: TelModel,
    public loans?: LoanModel
  ) {
    super();
  }
}
