import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { UserModel } from "src/app/shared/models/user.model";
import { GlobalService } from "src/app/services/global.service";
import { ValidatorsService } from "src/app/services/validators.service";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { TelDescriptionModel } from "src/app/shared/models/tel-description.model";
@Component({
  selector: "app-form-user",
  templateUrl: "./form-user.component.html",
  styleUrls: ["./form-user.component.scss"],
})
export class FormUserComponent implements OnInit {
  @Input() public data: UserModel;
  @Output() public onData: EventEmitter<UserModel>;

  public forma: FormGroup;
  public buttonText = "crear";
  public documents: DocumentTypeModel[];
  public telds: TelDescriptionModel[];

  constructor(
    private _fb: FormBuilder,
    private _globalService: GlobalService,
    private _validator: ValidatorsService
  ) {
    this.onData = new EventEmitter();
    this.initForm();
    this.listenerForm();
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.dataForm();
  }

  onAction() {
    if (this.forma.invalid) {
      console.log(this.forma);
      Object.values(this.forma.controls).forEach((c) => {
        if (c instanceof FormGroup) {
          Object.values(c.controls).forEach((c) => {
            c.markAsTouched();
          });
        } else {
          c.markAsTouched();
        }
      });
      return;
    }
    this.data = this.forma.value;
    console.log(this.data);
    this.onData.emit(this.data);
  }

  dataForm() {
    if (this.data != null) {
      this.forma.reset({ ...this.data });
    }
  }

  listenerForm() {
    /*
    this.forma.valueChanges.subscribe((value) => {
      console.log({ value });
    });
    */
  }

  initForm() {
    this._globalService.get().subscribe((dt) => {
      // console.log({ dt });
      this.documents = dt.document_types;
      this.telds = dt.tel_descriptions;
      this.documents.unshift({
        description: "-- selecione tipo de documento --",
      });
    });

    this.forma = this._fb.group(
      {
        id: [0],
        actived: [true, [Validators.required]],
        nick_name: [""],
        email: [
          "",
          [
            Validators.required,
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
          ],
          ,
        ],
        password: [""],
        document_code: [
          "",
          [Validators.required, this._validator.documentCode],
        ],
        document: [
          "",
          [
            Validators.required,
            this._validator.document,
            Validators.pattern("[0-9]+"),
          ],
        ],
        name: ["", [Validators.required], this._validator.userExists],
        admin: [false, [Validators.required]],
        time_zone: [
          -5,
          [Validators.required, Validators.min(-24), Validators.max(24)],
        ],
        change_password: [true, [Validators.required]],
        confirm_password: [""],
        tels: this._fb.array([]),
      },
      {
        validators: this._validator.passwordEquals(
          "password",
          "confirm_password"
        ),
      }
    );
  }

  get activedInvalid(): boolean {
    return (
      this.forma.get("actived").invalid && this.forma.get("actived").touched
    );
  }

  get nick_nameInvalid(): boolean {
    return (
      this.forma.get("nick_name").invalid && this.forma.get("nick_name").touched
    );
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
  get nameInvalid(): boolean {
    return this.forma.get("name").invalid && this.forma.get("name").touched;
  }

  get adminInvalid(): boolean {
    return this.forma.get("admin").invalid && this.forma.get("admin").touched;
  }
  get time_zoneInvalid(): boolean {
    return (
      this.forma.get("time_zone").invalid && this.forma.get("time_zone").touched
    );
  }

  get change_passwordInvalid(): boolean {
    return (
      this.forma.get("change_password").invalid &&
      this.forma.get("change_password").touched
    );
  }
  get passwordInvalid(): boolean {
    return (
      this.forma.get("password").invalid && this.forma.get("password").touched
    );
  }
  get confirm_passwordInvalid(): boolean {
    return !(
      this.forma.get("password").value ===
      this.forma.get("confirm_password").value
    );
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
}
