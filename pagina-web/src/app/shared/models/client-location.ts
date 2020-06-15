import { BaseDB } from "./base-db";

export interface ClientLocation extends BaseDB {
  id_collection: number;
  name: string;
}
