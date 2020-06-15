import { BaseDB } from "./base-db";

export interface LoanState extends BaseDB {
  state: string;
}
