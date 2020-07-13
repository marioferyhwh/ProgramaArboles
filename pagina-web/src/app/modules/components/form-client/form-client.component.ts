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
import { ClientLocationModel } from "src/app/shared/models/client-location.model";
import { UserModel } from "src/app/shared/models/user.model";

@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClienteComponent implements OnInit {
  @Input() public data: ClientModel;
  @Input() public collections: CollectionModel[];
  @Input() public users: UserModel[];
  @Input() public locations: ClientLocationModel[];
  @Output() public onData: EventEmitter<ClientModel>;

  public forma: FormGroup;
  public debug: boolean;

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
    this.debug = false;
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
    this.forma.get("number_loans").disable();
    this.forma.get("id_collection").disable();
    this.forma.get("id_user").disable();
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
    if (this.forma.value["email"] == null) {
      this.forma.value["email"] = "";
    }
    if (this.forma.value["document"] == null) {
      this.forma.value["document"] = 0;
    }
    this.forma.value["id_type_business"] = parseInt(
      this.forma.value["id_type_business"]
    );
    this.forma.value["id_location"] = parseInt(this.forma.value["id_location"]);
    this.forma.value["id_loan_state"] = parseInt(
      this.forma.value["id_loan_state"]
    );
    const d = <ClientModel>this.forma.value;
    d.id = this.data.id;
    d.id_collection = this.data.id_collection;
    d.id_user = this.data.id_user;
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
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      email: [
        "",
        [
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
          Validators.maxLength(100),
        ],
      ],
      document_code: ["", [this._validators.documentCode]],
      document: [
        "",
        [
          this._validators.document,
          Validators.pattern("[0-9]+"),
          Validators.maxLength(11),
        ],
      ],
      adress: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
        ],
      ],
      number_loans: [0],
      id_loan_state: [1, [Validators.required, , Validators.min(1)]],
      id_type_business: ["", [Validators.required, , Validators.min(1)]],
      id_location: ["", [Validators.required, , Validators.min(1)]],
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

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }
  numberInvalid(i: number) {
    const forma = this.telsArray.controls[i];
    return forma.get("number").invalid && forma.get("number").touched;
  }

  get nameInvalid(): boolean {
    return this.InvalidField("name");
  }
  get emailInvalid(): boolean {
    return this.InvalidField("email");
  }
  get documentInvalid(): boolean {
    return this.InvalidField("document");
  }
  get document_codeInvalid(): boolean {
    return this.InvalidField("document_code");
  }
  get adressInvalid(): boolean {
    return this.InvalidField("adress");
  }
  get id_loan_stateInvalid(): boolean {
    return this.InvalidField("id_loan_state");
  }
  get id_type_businessInvalid(): boolean {
    return this.InvalidField("id_type_business");
  }
  get id_locationInvalid(): boolean {
    return this.InvalidField("id_location");
  }
  get id_collectionInvalid(): boolean {
    return this.InvalidField("id_collection");
  }
  get id_userInvalid(): boolean {
    return this.InvalidField("id_user");
  }
}
