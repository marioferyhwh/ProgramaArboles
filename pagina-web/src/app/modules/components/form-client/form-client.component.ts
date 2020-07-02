import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ClientModel } from "src/app/shared/models/client.model";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { GlobalService } from "src/app/services/global.service";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { TelDescriptionModel } from "src/app/shared/models/tel-description.model";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { isUndefined } from "util";
import { ValidatorsService } from "src/app/services/validators.service";

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
  public telds: TelDescriptionModel[];

  constructor(
    private _globalService: GlobalService,
    private _fb: FormBuilder,
    private _validators: ValidatorsService
  ) {
    this.initForm();
    this.upData();
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
    console.log(this.forma.value);
    this.clientData.emit(this.client);
  }

  initForm() {
    this._globalService.get().subscribe((dt) => {
      console.log({ dt });
      this.documents = dt.document_types;
      this.loan_states = dt.loan_states;
      this.businesstype = dt.business_types;
      this.telds = dt.tel_descriptions;
      this.documents.unshift({
        description: "-- selecione tipo de documento --",
      });
      this.businesstype.unshift({
        //id: 0,
        type_business: "-- selecione negocio --",
      });
      this.telds.unshift({
        //id: 0,
        tel_description: "-- selecione  descripcion --",
      });
    });
    this.forma = this._fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.email]],
      document_code: ["", [this._validators.documentCode]],
      document: ["", [this._validators.documentCode]],
      adress: ["", [Validators.required]],
      number_loans: [0],
      id_loan_state: [1, [Validators.required]],
      id_type_business: ["", [Validators.required]],
      id_location: ["", [Validators.required]],
      tels: this._fb.array([]),

      //id_collection: [""],
      //id_user: [""],
    });
  }

  addTel() {
    this.telsArray.push(
      this._fb.group({
        id_tel_descript: [1, Validators.required],
        number: ["", Validators.required],
      })
    );
  }

  removeTel(i: number) {
    this.telsArray.removeAt(i);
  }

  get telsArray(): FormArray {
    return <FormArray>this.forma.get("tels");
  }

  numberInvalid(i: number) {
    const forma = this.telsArray.controls[i];
    return forma.get("number").invalid && forma.get("number").touched;
  }

  get nameInvalid(): boolean {
    return this.forma.get("name").invalid && this.forma.get("name").touched;
  }

  get emailInvalid(): boolean {
    return this.forma.get("email").invalid && this.forma.get("email").touched;
  }

  get documentInvalid(): boolean {
    return (
      this.forma.get("document").invalid && this.forma.get("document").touched
    );
  }

  get document_codeInvalid(): boolean {
    return (
      this.forma.get("document_code").invalid &&
      this.forma.get("document_code").touched
    );
  }

  get adressInvalid(): boolean {
    return this.forma.get("adress").invalid && this.forma.get("adress").touched;
  }

  get id_loan_stateInvalid(): boolean {
    return (
      this.forma.get("id_loan_state").invalid &&
      this.forma.get("id_loan_state").touched
    );
  }

  get id_type_businessInvalid(): boolean {
    return (
      this.forma.get("id_type_business").invalid &&
      this.forma.get("id_type_business").touched
    );
  }

  get id_locationInvalid(): boolean {
    return (
      this.forma.get("id_location").invalid &&
      this.forma.get("id_location").touched
    );
  }

  upData() {
    if (this.client != null) {
      // this.forma.setValue(this.client);
      this.forma.reset(this.client);
    }
  }
}
