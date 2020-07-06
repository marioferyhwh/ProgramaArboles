import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/user/login/login.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { ClientListComponent } from "./modules/client/client-list/client-list.component";
import { ClientNewComponent } from "./modules/client/client-new/client-new.component";
import { ClientEditComponent } from "./modules/client/client-edit/client-edit.component";
import { UserNewComponent } from "./modules/user/user-new/user-new.component";
import { UserListComponent } from "./modules/user/user-list/user-list.component";
import { UserEditComponent } from "./modules/user/user-edit/user-edit.component";
import { BodyComponent } from "./modules/body/body.component";
import { LoginGuard } from "./guards/login.guard";
import { LoanNewComponent } from "./modules/loan/loan-new/loan-new.component";
import { BusinessTypeListComponent } from "./modules/business/business-type-list/business-type-list.component";
import { BusinessTypeNewComponent } from "./modules/business/business-type-new/business-type-new.component";
import { BusinessTypeEditComponent } from "./modules/business/business-type-edit/business-type-edit.component";
import { CollectionListComponent } from "./modules/collection/collection-list/collection-list.component";
import { CollectionNewComponent } from "./modules/collection/collection-new/collection-new.component";
import { CollectionEditComponent } from "./modules/collection/collection-edit/collection-edit.component";
import { ExpenseListComponent } from "./modules/expense/expense-list/expense-list.component";
import { ExpenseNewComponent } from "./modules/expense/expense-new/expense-new.component";
import { ExpenseEditComponent } from "./modules/expense/expense-edit/expense-edit.component";
import { ClienteLocationListComponent } from "./modules/client/cliente-location-list/cliente-location-list.component";
import { ClienteLocationNewComponent } from "./modules/client/cliente-location-new/cliente-location-new.component";
import { ClienteLocationEditComponent } from "./modules/client/cliente-location-edit/cliente-location-edit.component";
import { CollectionCashListComponent } from "./modules/collection/collection-cash-list/collection-cash-list.component";
import { CollectionCashNewComponent } from "./modules/collection/collection-cash-new/collection-cash-new.component";
import { CollectionCashEditComponent } from "./modules/collection/collection-cash-edit/collection-cash-edit.component";
import { ExpenseDescriptionListComponent } from "./modules/expense/expense-description-list/expense-description-list.component";
import { ExpenseDescriptionNewComponent } from "./modules/expense/expense-description-new/expense-description-new.component";
import { ExpenseDescriptionEditComponent } from "./modules/expense/expense-description-edit/expense-description-edit.component";
import { LoanLoanPaymentListComponent } from "./modules/loan/loan-loan-payment-list/loan-loan-payment-list.component";
import { LoanLoanPaymentNewComponent } from "./modules/loan/loan-loan-payment-new/loan-loan-payment-new.component";
import { LoanLoanPaymentEditComponent } from "./modules/loan/loan-loan-payment-edit/loan-loan-payment-edit.component";
import { LoanLoanStateListComponent } from "./modules/loan/loan-loan-state-list/loan-loan-state-list.component";
import { LoanLoanStateNewComponent } from "./modules/loan/loan-loan-state-new/loan-loan-state-new.component";
import { LoanLoanStateEditComponent } from "./modules/loan/loan-loan-state-edit/loan-loan-state-edit.component";
import { LoanListComponent } from "./modules/loan/loan-list/loan-list.component";
import { LoanEditComponent } from "./modules/loan/loan-edit/loan-edit.component";
import { UserLevelListComponent } from "./modules/user/user-level-list/user-level-list.component";
import { UserLevelNewComponent } from "./modules/user/user-level-new/user-level-new.component";
import { UserLevelEditComponent } from "./modules/user/user-level-edit/user-level-edit.component";
import { UserCollectionNewComponent } from "./modules/user/user-collection-new/user-collection-new.component";
import { UserCollectionEditComponent } from "./modules/user/user-collection-edit/user-collection-edit.component";
import { UserCollectionListComponent } from "./modules/user/user-collection-list/user-collection-list.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: BodyComponent,
    canActivate: [LoginGuard],
    children: [
      { path: "not-found", component: NotFoundComponent },

      { path: "negocio/lista", component: BusinessTypeListComponent },
      { path: "negocio/nuevo", component: BusinessTypeNewComponent },
      { path: "negocio/:id", component: BusinessTypeEditComponent },
      { path: "negocio/editar/:id", component: BusinessTypeEditComponent },

      { path: "cliente/lista", component: ClientListComponent },
      { path: "cliente/nuevo", component: ClientNewComponent },
      { path: "cliente/:id", component: ClientEditComponent },
      { path: "cliente/editar/:id", component: ClientEditComponent },

      { path: "sector/lista", component: ClienteLocationListComponent },
      { path: "sector/nuevo", component: ClienteLocationNewComponent },
      { path: "sector/:id", component: ClienteLocationEditComponent },
      { path: "sector/editar/:id", component: ClienteLocationEditComponent },

      { path: "cobro/caja/lista", component: CollectionCashListComponent },
      { path: "cobro/caja/nuevo", component: CollectionCashNewComponent },
      { path: "cobro/caja/:id", component: CollectionCashEditComponent },
      { path: "cobro/caja/:id/editar", component: CollectionCashEditComponent },

      { path: "cobro/lista", component: CollectionListComponent },
      { path: "cobro/nuevo", component: CollectionNewComponent },
      { path: "cobro/:id", component: CollectionEditComponent },
      {
        path: "cobro/:id/editar",
        component: CollectionEditComponent,
      },

      {
        path: "gasto/descripcion/lista",
        component: ExpenseDescriptionListComponent,
      },
      {
        path: "gasto/descripcion/nuevo",
        component: ExpenseDescriptionNewComponent,
      },
      {
        path: "gasto/descripcion/:id",
        component: ExpenseDescriptionEditComponent,
      },
      {
        path: "gasto/descripcion/:id/editar",
        component: ExpenseDescriptionEditComponent,
      },

      { path: "gasto/lista", component: ExpenseListComponent },
      { path: "gasto/nuevo", component: ExpenseNewComponent },
      { path: "gasto/:id", component: ExpenseEditComponent },
      { path: "gasto/:id/editar", component: ExpenseEditComponent },

      { path: "prestamo/pago/lista", component: LoanLoanPaymentListComponent },
      { path: "prestamo/pago/nuevo", component: LoanLoanPaymentNewComponent },
      { path: "prestamo/pago/:id", component: LoanLoanPaymentEditComponent },
      {
        path: "prestamo/pago/:id/editar",
        component: LoanLoanPaymentEditComponent,
      },

      { path: "prestamo/estados/lista", component: LoanLoanStateListComponent },
      { path: "prestamo/estados/nuevo", component: LoanLoanStateNewComponent },
      { path: "prestamo/estados/:id", component: LoanLoanStateEditComponent },
      {
        path: "prestamo/estados/:id/editar",
        component: LoanLoanStateEditComponent,
      },

      { path: "prestamo/lista", component: LoanListComponent },
      { path: "prestamo/nuevo", component: LoanNewComponent },
      { path: "prestamo/:id", component: LoanEditComponent },
      { path: "prestamo/:id/editar", component: LoanEditComponent },

      { path: "usuario/cobro/lista", component: UserCollectionListComponent },
      { path: "usuario/cobro/nuevo", component: UserCollectionNewComponent },
      { path: "usuario/cobro/:id", component: UserCollectionEditComponent },
      {
        path: "usuario/cobro/:id/editar",
        component: UserCollectionEditComponent,
      },

      { path: "usuario/nivel/lista", component: UserLevelListComponent },
      { path: "usuario/nivel/nuevo", component: UserLevelNewComponent },
      { path: "usuario/nivel/:id", component: UserCollectionEditComponent },
      { path: "usuario/nivel/:id/editar", component: UserLevelEditComponent },

      { path: "usuario/lista", component: UserListComponent },
      { path: "usuario/nuevo", component: UserNewComponent },
      { path: "usuario/:id", component: UserEditComponent },
      { path: "usuario/:id/editar", component: UserEditComponent },

      { path: "**", pathMatch: "full", redirectTo: "not-found" },
    ],
  },
  { path: "**", pathMatch: "full", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /* ,{useHash:true} */)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
