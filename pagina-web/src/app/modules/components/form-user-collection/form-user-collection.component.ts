import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UserCollectionModel } from "src/app/shared/models/user-collection.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { UserModel } from "src/app/shared/models/user.model";
import { CollectionModel } from "src/app/shared/models/collection.model";

@Component({
  selector: "app-form-user-collection",
  templateUrl: "./form-user-collection.component.html",
  styleUrls: ["./form-user-collection.component.scss"],
})
export class FormUserCollectionComponent implements OnInit {
  @Input() public data: UserCollectionModel;
  @Input() public users: UserModel[];
  @Input() public collections: CollectionModel[];
  @Output() public onData: EventEmitter<UserCollectionModel>;

  public forma: FormGroup;
  public debug: boolean;

  constructor(private _fb: FormBuilder, private _userService: UserService) {
    this.debug = false;
    this.onData = new EventEmitter();
    this.initForm();
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.dataForm();
  }

  dataForm() {
    if (this.data != null) {
      if (this.data.actived == null) {
        this.data.actived = false;
      }
      this.forma.reset({ ...this.data });
    }
    this.forma.get("id").disable();
    this.forma.controls["money"].disable();
  }

  onAction() {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((c) => {
        c.markAsTouched();
      });
      return;
    }
    const d = <UserCollectionModel>this.forma.value;
    d.id = this.data.id;
    this.onData.emit(d);
  }

  initForm() {
    this.forma = this._fb.group({
      id: [0],
      money: [0, Validators.required, Validators.min(0)],
      name: [0, Validators.required],
      actived: [true, Validators.required],
      id_user: [0, Validators.required],
      id_collection: [0, Validators.required],
      id_user_level: [0, Validators.required],
    });
  }

  cancel() {
    this._userService.routeList();
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }
  get activedInvalid(): boolean {
    return this.InvalidField("actived");
  }
  get id_userInvalid(): boolean {
    return this.InvalidField("id_user");
  }
  get id_collectionInvalid(): boolean {
    return this.InvalidField("id_collection");
  }
  get id_user_levelInvalid(): boolean {
    return this.InvalidField("id_user_level");
  }
  get moneyInvalid(): boolean {
    return this.InvalidField("money");
  }
  get nameInvalid(): boolean {
    return this.InvalidField("name");
  }
}
