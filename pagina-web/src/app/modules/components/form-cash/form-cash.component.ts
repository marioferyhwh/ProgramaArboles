import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CollectionCashModel } from "src/app/shared/models/collection-cash.model";
import { CollectionService } from "src/app/services/collection.service";
import { CollectionModel } from "src/app/shared/models/collection.model";
import { UserModel } from "src/app/shared/models/user.model";
@Component({
  selector: "app-form-cash",
  templateUrl: "./form-cash.component.html",
  styleUrls: ["./form-cash.component.scss"],
})
export class FormCashComponent implements OnInit {
  @Input() public data: CollectionCashModel;
  @Input() public collections: CollectionModel[];
  @Input() public users: UserModel[];
  @Output() public onData: EventEmitter<CollectionCashModel>;

  public forma: FormGroup;
  public debug: boolean;

  constructor(
    private _fb: FormBuilder,
    private _collectionService: CollectionService
  ) {
    this.debug = false;
    this.onData = new EventEmitter();
    this.initForm();
  }

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(this.users);
    this.dataForm();
  }

  dataForm() {
    if (this.data != null) {
      this.forma.reset({ ...this.data });
      if (this.data.id != null) {
        this.forma.get("id_user").disable();
      }
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
    this.forma.value["id_user"] = parseInt(this.forma.value["id_user"]);
    const d = <CollectionCashModel>this.forma.value;
    d.id = this.data.id;
    d.id_collection = this.data.id_collection;
    this.onData.emit(d);
  }
  initForm() {
    this.forma = this._fb.group({
      id: [],
      id_collection: [0, [Validators.required, Validators.min(1)]],
      id_user: [0, [Validators.required, Validators.min(1)]],
      money: [0, Validators.required],
    });
  }

  cancel() {
    this._collectionService.routeListcash();
  }

  InvalidField(Field: string): boolean {
    return this.forma.get(Field).invalid && this.forma.get(Field).touched;
  }

  get id_collectionInvalid(): boolean {
    return this.InvalidField("id_collection");
  }
  get id_userInvalid(): boolean {
    return this.InvalidField("id_user");
  }
  get moneyInvalid(): boolean {
    return this.InvalidField("money");
  }
}
