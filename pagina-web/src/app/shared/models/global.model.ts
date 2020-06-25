import { BusinessTypeModel } from "./business-type.model";
import { TelModel } from "./tel.model";
import { LoanStateModel } from "./loan-state.model";
import { UserLevelModel } from "./user-level.model";
import { DocumentTypeModel } from "./document-type.model";
import { TelDescriptionModel } from "./tel-description.model";

export class GlobalModel {
  business_types: BusinessTypeModel[];
  tel_descriptions: TelDescriptionModel[];
  loan_states: LoanStateModel[];
  user_levels: UserLevelModel[];
  document_types: DocumentTypeModel[];
  levels: any[];
}
