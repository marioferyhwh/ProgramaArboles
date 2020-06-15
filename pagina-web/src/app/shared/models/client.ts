import { BaseDB } from "./base-db";
import { LoanState } from "./loan-state";
import { BusinessType } from "./business-type";
import { User } from "./user";
import { Tel } from "./tel";
import { Loan } from "./loan";
import { ClientLocation } from "./client-location";

export interface Client extends BaseDB {
  name: string;
  email: string;
  document_code: string;
  document: string;
  adress: string;
  number_loans: string;
  id_collection: number;
  id_loan_state: number;
  id_type_business: number;
  id_location: number;
  id_user: number;
  state: LoanState;
  bussiness: BusinessType;
  location: ClientLocation;
  user_create: User;
  tels_delete: Tel;
  tels_new: Tel;
  tels: Tel;
  loans: Loan;
}
