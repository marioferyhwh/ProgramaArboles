import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ClientModel } from "src/app/shared/models/client.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GlobalService } from "src/app/services/global.service";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { TelDescriptionModel } from "src/app/shared/models/tel-description.model";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";

@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClienteComponent implements OnInit {
  @Input() public client: ClientModel;
  @Output() public clientData: EventEmitter<ClientModel>;

  public forma: FormGroup;
  public documents: DocumentTypeModel[];
  public loan_states: LoanStateModel[];
  public businesstype: BusinessTypeModel[];
  public tels: TelDescriptionModel[];
  constructor(private _globalService: GlobalService, private _fb: FormBuilder) {
    this.initform();
  }

  ngOnInit(): void {}

  onAction() {
    console.log(this.forma);
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    console.log(this.client);
    console.log(this.forma["controls"]);
    this.clientData.emit(this.client);
  }

  initform() {
    this._globalService.get().subscribe((dt) => {
      console.log({ dt });
      this.documents = dt.document_types;
      this.loan_states = dt.loan_states;
      this.businesstype = dt.business_types;
      this.tels = dt.tel_descriptions;
      this.documents.unshift({
        description: "-- selecione tipo de documento --",
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
    this.forma = this._fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.email]],
      document_code: [""],
      document: [""],
      adress: ["", [Validators.required]],
      number_loans: [0],
      id_loan_state: ["", [Validators.required]],
      id_type_business: ["", [Validators.required]],
      id_location: ["", [Validators.required]],
      //id_collection: [""],
      //id_user: [""],
    });
  }

  nameInvalid(): boolean {
    return this.forma.get("name").invalid && this.forma.get("name").touched;
  }

  emailInvalid(): boolean {
    return this.forma.get("email").invalid && this.forma.get("email").touched;
  }

  adressInvalid(): boolean {
    return this.forma.get("adress").invalid && this.forma.get("adress").touched;
  }

  id_loan_stateInvalid(): boolean {
    return (
      this.forma.get("id_loan_state").invalid &&
      this.forma.get("id_loan_state").touched
    );
  }

  id_type_businessInvalid(): boolean {
    return (
      this.forma.get("id_type_business").invalid &&
      this.forma.get("id_type_business").touched
    );
  }

  id_locationInvalid(): boolean {
    return (
      this.forma.get("id_location").invalid &&
      this.forma.get("id_location").touched
    );
  }
}
