import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./button/button.component";
import { TableClientComponent } from "./table-client/table-client.component";
import { TableCollectionComponent } from "./table-collection/table-collection.component";
import { TableLoanComponent } from "./table-loan/table-loan.component";
import { TableLoanPaymentComponent } from "./table-loan-payment/table-loan-payment.component";
import { TableExpenseComponent } from "./table-expense/table-expense.component";
import { TableCashComponent } from "./table-cash/table-cash.component";
import { TableUserComponent } from "./table-user/table-user.component";
import { FormUserComponent } from "./form-user/form-user.component";
import { FormClienteComponent } from "./form-client/form-client.component";
import { FormCollectionComponent } from "./form-collection/form-collection.component";
import { FormLoanComponent } from "./form-loan/form-loan.component";
import { FormLoanPaymentComponent } from "./form-loan-payment/form-loan-payment.component";
import { FormExpenseComponent } from "./form-expense/form-expense.component";
import { FormGeneralComponent } from "./form-general/form-general.component";
import { FormTelComponent } from "./form-tel/form-tel.component";
import { FormLocationComponent } from "./form-location/form-location.component";
import { FormCashComponent } from "./form-cash/form-cash.component";
import { FormLoginComponent } from "./form-login/form-login.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LoadingComponent } from "./loading/loading.component";
import { TableTypeaComponent } from "./table-typea/table-typea.component";
import { TableLocationComponent } from "./table-location/table-location.component";
import { TableBusinessTypeComponent } from "./table-business-type/table-business-type.component";
import { TableDocumentsComponent } from "./table-documents/table-documents.component";
import { FormDocumentsComponent } from "./form-documents/form-documents.component";
import { FormBusinessTypeComponent } from "./form-business-type/form-business-type.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
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
    NavBarComponent,
    LoadingComponent,
    TableTypeaComponent,
    TableLocationComponent,
    TableBusinessTypeComponent,
    TableDocumentsComponent,
    FormDocumentsComponent,
    FormBusinessTypeComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [
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
    NavBarComponent,
    LoadingComponent,
    TableTypeaComponent,
    TableLocationComponent,
    TableBusinessTypeComponent,
    TableDocumentsComponent,
    FormDocumentsComponent,
    FormBusinessTypeComponent,
  ],
})
export class ComponentsModule {}
