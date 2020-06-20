import { Injectable } from "@angular/core";
import { ExpenseModel } from "../shared/models/expense.model";

@Injectable({
  providedIn: "root",
})
export class ExpenseService {
  public expese: ExpenseModel[];
  constructor() {}
}
