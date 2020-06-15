import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./modules/components/header/header.component";
import { FooterComponent } from "./modules/components/footer/footer.component";
import { ButtonComponent } from "./modules/components/button/button.component";
import { TableClientComponent } from "./modules/components/table-client/table-client.component";
import { TableCollectionComponent } from "./modules/components/table-collection/table-collection.component";
import { TableLoanComponent } from "./modules/components/table-loan/table-loan.component";
import { TableLoanPaymentComponent } from "./modules/components/table-loan-payment/table-loan-payment.component";
import { TableExpenseComponent } from "./modules/components/table-expense/table-expense.component";
import { TableCashComponent } from "./modules/components/table-cash/table-cash.component";
import { FormUserComponent } from "./modules/components/form-user/form-user.component";
import { FormClienteComponent } from "./modules/components/form-cliente/form-cliente.component";
import { FormCollectionComponent } from "./modules/components/form-collection/form-collection.component";
import { FormLoanComponent } from "./modules/components/form-loan/form-loan.component";
import { FormLoanPaymentComponent } from "./modules/components/form-loan-payment/form-loan-payment.component";
import { FormExpenseComponent } from "./modules/components/form-expense/form-expense.component";
import { FormGeneralComponent } from "./modules/components/form-general/form-general.component";
import { FormTelComponent } from "./modules/components/form-tel/form-tel.component";
import { FormLocationComponent } from "./modules/components/form-location/form-location.component";
import { FormCashComponent } from "./modules/components/form-cash/form-cash.component";
import { FormLoginComponent } from "./modules/components/form-login/form-login.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./modules/login/login.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { NavBarComponent } from "./modules/components/nav-bar/nav-bar.component";

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
    //ModelsModule,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
