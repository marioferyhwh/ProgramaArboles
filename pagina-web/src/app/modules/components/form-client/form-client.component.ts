import { Component, OnInit, Input } from "@angular/core";
import { ClientModel } from "src/app/shared/models/client.model";
import { NgForm } from "@angular/forms";
import { GlobalService } from "src/app/services/global.service";
import { GlobalModel } from "src/app/shared/models/global.model";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { TelModel } from "src/app/shared/models/tel.model";
import { TelDescriptionModel } from "src/app/shared/models/tel-description.model";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";

@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClienteComponent implements OnInit {
  @Input() public client: ClientModel;
  public documents: DocumentTypeModel[];
  public loan_states: LoanStateModel[];
  public businesstype: BusinessTypeModel[];
  public tels: TelDescriptionModel[];
  constructor(private _globalService: GlobalService) {}

  ngOnInit(): void {
    this._globalService.get().subscribe((dt) => {
      console.log({ dt });
      this.documents = dt.document_types;
      this.loan_states = dt.loan_states;
      this.businesstype = dt.business_types;
      this.tels = dt.tel_descriptions;
      this.documents.unshift({
        description: "-- selecione tipo de documento --",
      });
      this.loan_states.unshift({
        //id: 0,
        state: "-- selecione Estado --",
      });
      this.businesstype.unshift({
        //id: 0,
        type_business: "-- selecione negocio --",
      });
      this.tels.unshift({
        //id: 0,
        tel_description: "-- selecione  descripcion --",
      });
    });
  }
  onAction(fl: NgForm) {
    console.log({ fl });
    if (fl.invalid) {
      Object.values(fl.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    console.log(this.client);
    console.log(fl["controls"]);
  }
}
