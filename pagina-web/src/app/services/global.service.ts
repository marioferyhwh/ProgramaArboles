import { Injectable } from "@angular/core";
import { GlobalModel } from "../shared/models/global.model";
import { ApiServerService } from "./api-server.service";
import { RespModel } from "../shared/models/resp.model";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { GlobalVarModel } from "../shared/models/global-var.model";
import { UserModel } from "../shared/models/user.model";
import { CollectionModel } from "../shared/models/collection.model";
import { ClientModel } from "../shared/models/client.model";
import { ExpenseModel } from "../shared/models/expense.model";
import { UserCollectionModel } from "../shared/models/user-collection.model";
import { LoanModel } from "../shared/models/loan.model";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private _global: GlobalModel;
  private _variables: GlobalVarModel;
  constructor(private _api: ApiServerService) {}

  private _nameVar = "forest-var";

  get(): Observable<GlobalModel> {
    if (this._global == null) {
      return this._api.GetQuery("general").pipe(
        map((data: RespModel) => {
          this._global = <GlobalModel>data.data;
          return this._global;
        })
      );
    } else {
      return new Observable((observer) => {
        observer.next(this._global);
      });
    }
  }

  clear() {
    this._global = null;
  }

  getVar(): void {
    if (sessionStorage.getItem(this._nameVar)) {
      this._variables = JSON.parse(sessionStorage.getItem(this._nameVar));
    } else {
      this._variables = new GlobalVarModel();
    }
    // return new GlobalVarModel();
  }

  // setVar(data: GlobalVarModel) {
  //   var dataOld: GlobalVarModel = this.getVar;
  //   if (data.user) {
  //     dataOld.user = data.user;
  //   }
  //   if (data.collection) {
  //     dataOld.collection = data.collection;
  //   }
  //   if (data.client) {
  //     dataOld.client = data.client;
  //   }
  //   if (data.expense) {
  //     dataOld.expense = data.expense;
  //   }

  //   sessionStorage.setItem(this._nameVar, JSON.stringify(dataOld));
  // }

  clearVar() {
    if (sessionStorage.getItem(this._nameVar)) {
      sessionStorage.removeItem(this._nameVar);
    }
  }
  set getVarUser(dato) {
    this._variables.user = dato;

    this.varAllSave();
  }
  get getVarUser(): UserModel {
    this.getVar();
    if (this._variables.user == null) {
      this._variables.user = new UserModel();
    }
    return this._variables.user;
  }
  set getVarCollection(dato) {
    this._variables.collection = dato;

    this.varAllSave();
  }
  get getVarCollection(): CollectionModel {
    this.getVar();
    if (this._variables.collection == null) {
      this._variables.collection = new CollectionModel();
    }
    return this._variables.collection;
  }
  set getVarClient(dato) {
    this._variables.client = dato;

    this.varAllSave();
  }
  get getVarClient(): ClientModel {
    this.getVar();
    if (this._variables.client == null) {
      this._variables.client = new ClientModel();
    }
    return this._variables.client;
  }
  set getVarExpense(dato) {
    this._variables.expense = dato;

    this.varAllSave();
  }
  get getVarExpense(): ExpenseModel {
    this.getVar();
    if (this._variables.expense == null) {
      this._variables.expense = new ExpenseModel();
    }
    return this._variables.expense;
  }
  set getvarUserCollection(dato) {
    this._variables.userCollection = dato;

    this.varAllSave();
  }
  get getvarUserCollection(): UserCollectionModel {
    this.getVar();
    if (this._variables.userCollection == null) {
      this._variables.userCollection = new UserCollectionModel();
    }
    return this._variables.userCollection;
  }
  set getvarloan(dato) {
    this._variables.loan = dato;

    this.varAllSave();
  }
  get getvarloan(): LoanModel {
    this.getVar();
    if (this._variables.loan == null) {
      this._variables.loan = new LoanModel();
    }
    return this._variables.loan;
  }

  varAllSave() {
    //console.log(this._variables);
    sessionStorage.setItem(this._nameVar, JSON.stringify(this._variables));
  }

  varUserDelete() {
    this._variables.user = null;
    this.varAllSave();
  }
  varCollectionDelete() {
    this._variables.collection = null;
    this.varAllSave();
  }
  varClientDelete() {
    this._variables.client = null;
    this.varAllSave();
  }
  varExpenseDelete() {
    this._variables.expense = null;
    this.varAllSave();
  }
  varUserCollectionDelete() {
    this._variables.userCollection = null;
    this.varAllSave();
  }
  varloanDelete() {
    this._variables.loan = null;
    this.varAllSave();
  }
}
