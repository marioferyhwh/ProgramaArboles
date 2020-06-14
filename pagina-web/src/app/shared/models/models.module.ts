import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessType } from './business-type';
import { Client } from './client';
import { ClientLocation } from './client-location';
import { Collection } from './collection';
import { CollectionCash } from './collection-cash';
import { DocumentType } from './document-type';
import { ExpenseDescription } from './expense-description';
import { Expense } from './expense';
import { Loan } from './loan';
import { LoanPayment } from './loan-payment';
import { LoanState } from './loan-state';
import { Tel } from './tel';
import { TelDescription } from './tel-description';
import { User } from './user';
import { UserCollection } from './user-collection';
import { UserLevel } from './user-level';



@NgModule({
  declarations: [
    BusinessType,
    Client,
    ClientLocation,
    Collection,
    CollectionCash,
    DocumentType,
    Expense,
    ExpenseDescription,
    Loan,
    LoanPayment,
    LoanState,
    Tel,
    TelDescription,
    User,
    UserCollection,
    UserLevel
  ],
  imports: [
    CommonModule
  ]
})
export class ModelsModule { }
