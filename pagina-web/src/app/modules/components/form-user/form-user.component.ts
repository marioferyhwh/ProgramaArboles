import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { UserModel } from "src/app/shared/models/user.model";
import { GlobalService } from "src/app/services/global.service";
import { ValidatorsService } from "src/app/services/validators.service";
import { DocumentTypeModel } from "src/app/shared/models/document-type.model";
import { TelDescriptionModel } from "src/app/shared/models/tel-description.model";
import { Router } from "@angular/router";
@Component({
  selector: "app-form-user",
  templateUrl: "./form-user.component.html",
  styleUrls: ["./form-user.component.scss"],
})
export class FormUserComponent implements OnInit {
  @Input() public data: UserModel;
  @Output() public onData: EventEmitter<UserModel>;

  public forma: FormGroup;
  public debug: boolean;
  public documents: DocumentTypeModel[];
  public telds: TelDescriptionModel[];

  constructor(
    private _fb: FormBuilder,
    private _globalService: GlobalService,
    private _validator: ValidatorsService,
    private _router: Router
  ) {
    this.debug = false;
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
    const d = <UserModel>this.forma.value;
    d.id = this.data.id;
    if (d.password == null) {
      delete d.password;
    }
    this.onData.emit(d);
  }

  dataForm() {
    console.log(this.data);
    if (this.data != null) {
      if (this.data.actived == null) {
        this.data.actived = false;
      }
      if (this.data.admin == null) {
        this.data.admin = false;
      }
      if (this.data.change_password == null) {
        this.data.change_password = false;
      }
      if (this.data.time_zone == null) {
        this.data.time_zone = 0;
      }
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
    this.forma.get("id").disable();
  }

  cancel() {
    this._router.navigate(["/cobro"]);
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get activedInvalid(): boolean {
    return this.InvalidField("actived");
  }
  get nick_nameInvalid(): boolean {
    return this.InvalidField("nick_name");
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
  get nameInvalid(): boolean {
    return this.InvalidField("name");
  }
  get adminInvalid(): boolean {
    return this.InvalidField("admin");
  }
  get time_zoneInvalid(): boolean {
    return this.InvalidField("time_zone");
  }
  get change_passwordInvalid(): boolean {
    return this.InvalidField("change_password");
  }
  get passwordInvalid(): boolean {
    return this.InvalidField("password");
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
