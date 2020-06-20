import { Injectable } from "@angular/core";
import { LoanModel } from "../shared/models/loan.model";

@Injectable({
  providedIn: "root",
})
export class LoanService {
  public loan: LoanModel[];
  constructor() {}
}
