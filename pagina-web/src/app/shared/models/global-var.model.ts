import { UserModel } from "./user.model";
import { CollectionModel } from "./collection.model";
import { ClientModel } from "./client.model";
import { ExpenseModel } from "./expense.model";
import { UserCollectionModel } from "./user-collection.model";
import { LoanModel } from "./loan.model";

export class GlobalVarModel {
  user?: UserModel;
  collection?: CollectionModel;
  client?: ClientModel;
  expense?: ExpenseModel;
  userCollection?: UserCollectionModel;
  loan?: LoanModel;
}
