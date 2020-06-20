import { BaseDbModel } from "./base-db.model";
import { UserLevelModel } from "./user-level.model";
import { UserModel } from "./user.model";
import { CollectionModel } from "./collection.model";

export class UserCollectionModel extends BaseDbModel {
  actived: boolean;
  id_user: number;
  id_collection: number;
  id_user_level: number;
  money: number;
  name: string;
  access: UserLevelModel;
  user: UserModel;
  collection: CollectionModel;
}
