import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ClientModel } from "src/app/shared/models/client.model";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { GlobalService } from "src/app/services/global.service";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { LoanStateModel } from "src/app/shared/models/loan-state.model";
import { TelDescriptionModel } from "src/app/shared/models/tel-description.model";
import { BusinessTypeModel } from "src/app/shared/models/business-type.model";
import { ValidatorsService } from "src/app/services/validators.service";
import { ClientService } from "src/app/services/client.service";
import { CollectionModel } from "src/app/shared/models/collection.model";

@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClienteComponent implements OnInit {
  @Input() public data: ClientModel;
  @Input() public collections: CollectionModel[];
  @Output() public onData: EventEmitter<ClientModel>;

  public forma: FormGroup;

  public documents: DocumentTypeModel[];
  public loan_states: LoanStateModel[];
  public businesstype: BusinessTypeModel[];
  public telds: TelDescriptionModel[];

  constructor(
    private _globalService: GlobalService,
    private _fb: FormBuilder,
    private _validators: ValidatorsService,
    private _clientService: ClientService
  ) {
    this.initForm();
    this.onData = new EventEmitter();
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.dataForm();
  }

  dataForm() {
    if (this.data != null) {
      // this.forma.setValue(this.client);
      this.forma.reset({ ...this.data });
    }
    this.forma.get("id").disable();
    this.forma.get("id_collection").disable();
  }

  onAction() {
    console.log(this.forma);
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    console.log(this.data);
    console.log(this.forma.value);
    const d = <ClientModel>this.forma.value;
    d.id = this.data.id;
    d.id_collection = this.data.id_collection;
    this.onData.emit(d);
  }

  initForm() {
    this._globalService.get().subscribe((dt) => {
      // console.log({ dt });
      this.documents = dt.document_types;
      this.loan_states = dt.loan_states;
      this.businesstype = dt.business_types;
      this.telds = dt.tel_descriptions;
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

      id: [],
      id_collection: [0],
      id_user: [0],
    });
  }

  cancel() {
    this._clientService.routeList();
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
  get id_collectionInvalid(): boolean {
    return (
      this.forma.get("id_collection").invalid &&
      this.forma.get("id_collection").touched
    );
  }
}
