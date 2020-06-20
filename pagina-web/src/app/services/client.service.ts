import { Injectable } from "@angular/core";
import { Client } from "../shared/models/client";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private clients: Client[] = [
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
  constructor() {
    console.log("inicia servicio Cliente");
  }

  getClients(): Client[] {
    return this.clients;
  }
  getClient(id: number): Client {
    return this.clients[id];
  }

  createClient(Client: Client) {}
  editClient(Client: Client) {}
  deleteClient(id: number): Client {
    return this.clients[id];
  }
}
