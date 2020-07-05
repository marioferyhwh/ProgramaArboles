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

import { HeaderComponent } from "./modules/components/header/header.component";
import { FooterComponent } from "./modules/components/footer/footer.component";
import { ButtonComponent } from "./modules/components/button/button.component";
import { TableClientComponent } from "./modules/components/table-client/table-client.component";
import { TableCollectionComponent } from "./modules/components/table-collection/table-collection.component";
import { TableLoanComponent } from "./modules/components/table-loan/table-loan.component";
import { TableLoanPaymentComponent } from "./modules/components/table-loan-payment/table-loan-payment.component";
import { TableExpenseComponent } from "./modules/components/table-expense/table-expense.component";
import { TableCashComponent } from "./modules/components/table-cash/table-cash.component";
import { TableUserComponent } from "./modules/components/table-user/table-user.component";
import { FormUserComponent } from "./modules/components/form-user/form-user.component";
import { FormClienteComponent } from "./modules/components/form-client/form-client.component";
import { FormCollectionComponent } from "./modules/components/form-collection/form-collection.component";
import { FormLoanComponent } from "./modules/components/form-loan/form-loan.component";
import { FormLoanPaymentComponent } from "./modules/components/form-loan-payment/form-loan-payment.component";
import { FormExpenseComponent } from "./modules/components/form-expense/form-expense.component";
import { FormGeneralComponent } from "./modules/components/form-general/form-general.component";
import { FormTelComponent } from "./modules/components/form-tel/form-tel.component";
import { FormLocationComponent } from "./modules/components/form-location/form-location.component";
import { FormCashComponent } from "./modules/components/form-cash/form-cash.component";
import { FormLoginComponent } from "./modules/components/form-login/form-login.component";
import { LoginComponent } from "./modules/login/login.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { NavBarComponent } from "./modules/components/nav-bar/nav-bar.component";
import { ClientListComponent } from "./modules/client/client-list/client-list.component";
import { ClientNewComponent } from "./modules/client/client-new/client-new.component";
import { ClientEditComponent } from "./modules/client/client-edit/client-edit.component";
import { LoadingComponent } from "./modules/components/loading/loading.component";
import { UserNewComponent } from "./modules/user/user-new/user-new.component";
import { UserListComponent } from "./modules/user/user-list/user-list.component";
import { UserEditComponent } from "./modules/user/user-edit/user-edit.component";
import { BodyComponent } from "./modules/body/body.component";
import { LoanNewComponent } from "./modules/loan/loan-new/loan-new.component";
import { BusinessTypeNewComponent } from "./modules/business/business-type-new/business-type-new.component";
import { BusinessTypeEditComponent } from "./modules/business/business-type-edit/business-type-edit.component";
import { BusinessTypeListComponent } from "./modules/business/business-type-list/business-type-list.component";
import { TableTypeaComponent } from "./modules/components/table-typea/table-typea.component";
import { TableLocationComponent } from "./modules/components/table-location/table-location.component";
import { TableBusinessTypeComponent } from "./modules/components/table-business-type/table-business-type.component";
import { TableDocumentsComponent } from "./modules/components/table-documents/table-documents.component";
import { FormDocumentsComponent } from "./modules/components/form-documents/form-documents.component";
import { FormBusinessTypeComponent } from "./modules/components/form-business-type/form-business-type.component";
import { CollectionNewComponent } from "./modules/collection/collection-new/collection-new.component";
import { CollectionListComponent } from "./modules/collection/collection-list/collection-list.component";
import { CollectionEditComponent } from "./modules/collection/collection-edit/collection-edit.component";
import { ExpenseEditComponent } from "./modules/expense/expense-edit/expense-edit.component";
import { ExpenseListComponent } from "./modules/expense/expense-list/expense-list.component";
import { ExpenseNewComponent } from "./modules/expense/expense-new/expense-new.component";
import { LoanListComponent } from "./modules/loan/loan-list/loan-list.component";
import { LoanEditComponent } from "./modules/loan/loan-edit/loan-edit.component";
import { ClienteTelNewComponent } from "./modules/client/cliente-tel-new/cliente-tel-new.component";
import { ClienteTelEditComponent } from "./modules/client/cliente-tel-edit/cliente-tel-edit.component";
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
    //ComponentsModule,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    TableClientComponent,
    TableCollectionComponent,
    TableLoanComponent,
    TableLoanPaymentComponent,
    TableExpenseComponent,
    TableCashComponent,
    TableUserComponent,
    FormUserComponent,
    FormClienteComponent,
    FormCollectionComponent,
    FormLoanComponent,
    FormLoanPaymentComponent,
    FormExpenseComponent,
    FormGeneralComponent,
    FormTelComponent,
    FormLocationComponent,
    FormCashComponent,
    FormLoginComponent,
    LoginComponent,
    NotFoundComponent,
    NavBarComponent,
    ClientListComponent,
    ClientNewComponent,
    ClientEditComponent,
    LoadingComponent,
    UserNewComponent,
    UserListComponent,
    UserEditComponent,
    BodyComponent,
    LoanNewComponent,
    BusinessTypeNewComponent,
    BusinessTypeEditComponent,
    BusinessTypeListComponent,
    TableTypeaComponent,
    TableLocationComponent,
    TableBusinessTypeComponent,
    TableDocumentsComponent,
    FormDocumentsComponent,
    FormBusinessTypeComponent,
    CollectionNewComponent,
    CollectionListComponent,
    CollectionEditComponent,
    ExpenseEditComponent,
    ExpenseListComponent,
    ExpenseNewComponent,
    LoanListComponent,
    LoanEditComponent,
    ClienteTelNewComponent,
    ClienteTelEditComponent,
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
    //ModelsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
