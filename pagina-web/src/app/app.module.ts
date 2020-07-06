import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//services
// import { ClientService } from "./services/client.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//
import { registerLocaleData } from "@angular/common";
import localEs from "@angular/common/locales/es";
//
registerLocaleData(localEs);
//

import { ComponentsModule } from "./modules/components/components.module";

import { LoginComponent } from "./modules/login/login.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { ClientListComponent } from "./modules/client/client-list/client-list.component";
import { ClientNewComponent } from "./modules/client/client-new/client-new.component";
import { ClientEditComponent } from "./modules/client/client-edit/client-edit.component";
import { UserNewComponent } from "./modules/user/user-new/user-new.component";
import { UserListComponent } from "./modules/user/user-list/user-list.component";
import { UserEditComponent } from "./modules/user/user-edit/user-edit.component";
import { BodyComponent } from "./modules/body/body.component";
import { LoanNewComponent } from "./modules/loan/loan-new/loan-new.component";
import { BusinessTypeNewComponent } from "./modules/business/business-type-new/business-type-new.component";
import { BusinessTypeEditComponent } from "./modules/business/business-type-edit/business-type-edit.component";
import { BusinessTypeListComponent } from "./modules/business/business-type-list/business-type-list.component";
import { CollectionNewComponent } from "./modules/collection/collection-new/collection-new.component";
import { CollectionListComponent } from "./modules/collection/collection-list/collection-list.component";
import { CollectionEditComponent } from "./modules/collection/collection-edit/collection-edit.component";
import { ExpenseEditComponent } from "./modules/expense/expense-edit/expense-edit.component";
import { ExpenseListComponent } from "./modules/expense/expense-list/expense-list.component";
import { ExpenseNewComponent } from "./modules/expense/expense-new/expense-new.component";
import { LoanListComponent } from "./modules/loan/loan-list/loan-list.component";
import { LoanEditComponent } from "./modules/loan/loan-edit/loan-edit.component";
import { ClienteLocationNewComponent } from "./modules/client/cliente-location-new/cliente-location-new.component";
import { ClienteLocationEditComponent } from "./modules/client/cliente-location-edit/cliente-location-edit.component";
import { ClienteLocationListComponent } from "./modules/client/cliente-location-list/cliente-location-list.component";
import { CollectionCashNewComponent } from "./modules/collection/collection-cash-new/collection-cash-new.component";
import { CollectionCashEditComponent } from "./modules/collection/collection-cash-edit/collection-cash-edit.component";
import { CollectionCashListComponent } from "./modules/collection/collection-cash-list/collection-cash-list.component";
import { ExpenseDescriptionNewComponent } from "./modules/expense/expense-description-new/expense-description-new.component";
import { ExpenseDescriptionEditComponent } from "./modules/expense/expense-description-edit/expense-description-edit.component";
import { ExpenseDescriptionListComponent } from "./modules/expense/expense-description-list/expense-description-list.component";
import { LoanLoanStateNewComponent } from "./modules/loan/loan-loan-state-new/loan-loan-state-new.component";
import { LoanLoanStateEditComponent } from "./modules/loan/loan-loan-state-edit/loan-loan-state-edit.component";
import { LoanLoanStateListComponent } from "./modules/loan/loan-loan-state-list/loan-loan-state-list.component";
import { LoanLoanPaymentNewComponent } from "./modules/loan/loan-loan-payment-new/loan-loan-payment-new.component";
import { LoanLoanPaymentEditComponent } from "./modules/loan/loan-loan-payment-edit/loan-loan-payment-edit.component";
import { LoanLoanPaymentListComponent } from "./modules/loan/loan-loan-payment-list/loan-loan-payment-list.component";
import { UserLevelNewComponent } from "./modules/user/user-level-new/user-level-new.component";
import { UserLevelEditComponent } from "./modules/user/user-level-edit/user-level-edit.component";
import { UserLevelListComponent } from "./modules/user/user-level-list/user-level-list.component";
import { UserCollectionListComponent } from "./modules/user/user-collection-list/user-collection-list.component";
import { UserCollectionNewComponent } from "./modules/user/user-collection-new/user-collection-new.component";
import { UserCollectionEditComponent } from "./modules/user/user-collection-edit/user-collection-edit.component";
@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    NotFoundComponent,
    ClientListComponent,
    ClientNewComponent,
    ClientEditComponent,
    UserNewComponent,
    UserListComponent,
    UserEditComponent,
    BodyComponent,
    LoanNewComponent,
    BusinessTypeNewComponent,
    BusinessTypeEditComponent,
    BusinessTypeListComponent,
    CollectionNewComponent,
    CollectionListComponent,
    CollectionEditComponent,
    ExpenseEditComponent,
    ExpenseListComponent,
    ExpenseNewComponent,
    LoanListComponent,
    LoanEditComponent,
    ClienteLocationNewComponent,
    ClienteLocationEditComponent,
    ClienteLocationListComponent,
    CollectionCashNewComponent,
    CollectionCashEditComponent,
    CollectionCashListComponent,
    ExpenseDescriptionNewComponent,
    ExpenseDescriptionEditComponent,
    ExpenseDescriptionListComponent,
    LoanLoanStateNewComponent,
    LoanLoanStateEditComponent,
    LoanLoanStateListComponent,
    LoanLoanPaymentNewComponent,
    LoanLoanPaymentEditComponent,
    LoanLoanPaymentListComponent,
    UserLevelNewComponent,
    UserLevelEditComponent,
    UserLevelListComponent,
    UserCollectionListComponent,
    UserCollectionNewComponent,
    UserCollectionEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
