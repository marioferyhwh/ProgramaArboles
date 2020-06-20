import { BaseDbModel } from "./base-db.model";
import { TelDescriptionModel } from "./tel-description.model";

export class TelModel extends BaseDbModel {
  id_owner: number;
  number: number;
  id_tel_descript: number;
  type_tel: TelDescriptionModel;
}
