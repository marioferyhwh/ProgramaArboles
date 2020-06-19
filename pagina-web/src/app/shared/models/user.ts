import { BaseDB } from "./base-db";
import { UserCollection } from "./user-collection";
import { Tel } from "./tel";
import { Expense } from "./expense";

export interface User extends BaseDB {
  actived?: boolean;
  nick_name?: string;
  email?: string;
  password?: string;
  document_code?: string;
  document?: string;
  name?: string;
  admin?: boolean;
  time_zone?: number;
  confirm_password?: string;
  collections?: UserCollection;
  tels?: Tel;
  tels_new?: Tel;
  tels_delete?: Tel;
  expenses?: Expense;
}
