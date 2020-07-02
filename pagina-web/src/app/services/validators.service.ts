import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ValidatorsService {
  constructor() {}

  document(control: FormControl): { [s: string]: boolean } {
    // return { document: true }
    return null;
  }

  documentCode(control: FormControl): { [s: string]: boolean } {
    // return { document: true }
    return null;
  }
}
