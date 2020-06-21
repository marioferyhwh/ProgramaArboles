import { Injectable } from "@angular/core";
import { ClientModel } from "../shared/models/client.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiServerService } from "./api-server.service";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private clients: ClientModel[] = [
    {
      id: 1,
      name: "name1",
      number_loans: 1,
      id_loan_state: 1,
    },
    {
      id: 2,
      name: "name2",
      number_loans: 2,
      id_loan_state: 2,
    },
    {
      id: 3,
      name: "name3",
      number_loans: 3,
      id_loan_state: 3,
    },
    {
      id: 4,
      name: "name4",
      number_loans: 4,
      id_loan_state: 4,
    },
    {
      id: 5,
      name: "name5",
      number_loans: 5,
      id_loan_state: 5,
    },
  ];
  constructor(private _api: ApiServerService) {
    console.log("inicia servicio Cliente");
  }

  getClients(c: number): Observable<object> {
    return this._api.GetQuery(`client/list/${c}`);
    // .pipe(
    //   map((data: RespModel) => {
    //     return data.data;
    //   })
    // );
  }

  getClient(id: number): Observable<object> {
    return this._api.GetQuery(`client/list/${id}`);
  }

  createClient(Client: ClientModel): Observable<object> {
    return this._api.PostQuery(`client`);
  }

  editClient(client: ClientModel): Observable<object> {
    let id = client.id;
    return this._api.PutQuery(`client/${id}`);
  }

  deleteClient(id: number): Observable<object> {
    return this._api.DeleteQuery(`client/${id}`);
  }
}
