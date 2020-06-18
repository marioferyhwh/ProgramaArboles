import { BaseDB } from "./base-db";
import { User } from "./user";
import { Collection } from "./collection";
import { UserLevel } from "./user-level";

export interface UserCollection extends BaseDB {
  actived: boolean;
  id_user: number;
  id_collection: number;
  id_user_level: number;
  money: number;
  name: string;
  access?: UserLevel;
  user?: User;
  collection?: Collection;
}
