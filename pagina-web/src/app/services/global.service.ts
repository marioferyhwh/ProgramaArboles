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
    if (localStorage.getItem(this._nameVar)) {
      this._variables = JSON.parse(localStorage.getItem(this._nameVar));
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

  //   localStorage.setItem(this._nameVar, JSON.stringify(dataOld));
  // }

  clearVar() {
    if (localStorage.getItem(this._nameVar)) {
      localStorage.removeItem(this._nameVar);
    }
  }

  get getVarUser(): UserModel {
    this.getVar();
    if (this._variables.user == null) {
      this._variables.user = new UserModel();
    }
    return this._variables.user;
  }
  get getVarCollection(): CollectionModel {
    this.getVar();
    if (this._variables.collection == null) {
      this._variables.collection = new CollectionModel();
    }
    return this._variables.collection;
  }
  get getVarClient(): ClientModel {
    this.getVar();
    if (this._variables.client == null) {
      this._variables.client = new ClientModel();
    }
    return this._variables.client;
  }
  get getVarExpense(): ExpenseModel {
    this.getVar();
    if (this._variables.expense == null) {
      this._variables.expense = new ExpenseModel();
    }
    return this._variables.expense;
  }
  get getUserCollection(): UserCollectionModel {
    this.getVar();
    if (this._variables.userCollection == null) {
      this._variables.userCollection = new UserCollectionModel();
    }
    return this._variables.userCollection;
  }

  varAllSave() {
    //console.log(this._variables);
    localStorage.setItem(this._nameVar, JSON.stringify(this._variables));
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
}
