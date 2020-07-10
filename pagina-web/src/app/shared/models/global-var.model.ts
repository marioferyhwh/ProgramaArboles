import { UserModel } from "./user.model";
import { CollectionModel } from "./collection.model";
import { ClientModel } from "./client.model";
import { ExpenseModel } from "./expense.model";

export class GlobalVarModel {
  user?: UserModel;
  collection?: CollectionModel;
  client?: ClientModel;
  expense?: ExpenseModel;
}
