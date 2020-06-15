import { BaseDB } from "./base-db";
import { TelDescription } from "./tel-description";

export interface Tel extends BaseDB {
  id_owner: number;
  number: number;
  id_tel_descript: number;
  type_tel: TelDescription;
}
