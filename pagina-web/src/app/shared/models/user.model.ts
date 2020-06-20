import { BaseDbModel } from "./base-db.model";
import { UserCollectionModel } from "./user-collection.model";
import { TelModel } from "./tel.model";
import { ExpenseModel } from "./expense.model";
export class UserModel extends BaseDbModel {
  actived: boolean;
  nick_name: string;
  email: string;
  password: string;
  document_code: string;
  document: string;
  name: string;
  admin: boolean;
  time_zone: number;
  password_at: Date;
  change_password: boolean;
  confirm_password: string;
  collections: UserCollectionModel;
  tels: TelModel;
  tels_new: TelModel;
  tels_delete: TelModel;
  expenses: ExpenseModel;
}
