import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//services
// import { ClientService } from "./services/client.service";
import { FormsModule } from "@angular/forms";
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
import { ClientListComponent } from "./modules/client-list/client-list.component";
import { ClientNewComponent } from "./modules/client-new/client-new.component";
import { ClientEditComponent } from "./modules/client-edit/client-edit.component";
import { LoadingComponent } from "./modules/components/loading/loading.component";
import { UserNewComponent } from "./modules/user-new/user-new.component";
import { UserListComponent } from "./modules/user-list/user-list.component";
import { UserEditComponent } from "./modules/user-edit/user-edit.component";
import { BodyComponent } from "./modules/body/body.component";
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
    //ModelsModule,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
