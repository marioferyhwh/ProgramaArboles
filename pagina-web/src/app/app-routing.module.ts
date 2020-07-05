import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/login/login.component";
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

      { path: "cobro/lista", component: CollectionListComponent },
      { path: "cobro/nuevo", component: CollectionNewComponent },
      { path: "cobro/:id", component: CollectionEditComponent },
      { path: "cobro/:id/editar", component: CollectionEditComponent },

      { path: "gasto/lista", component: ExpenseListComponent },
      { path: "gasto/nuevo", component: ExpenseNewComponent },
      { path: "gasto/:id", component: ExpenseEditComponent },
      { path: "gasto/:id/editar", component: ExpenseEditComponent },

      { path: "prestamo/lista", component: ExpenseListComponent },
      { path: "prestamo/nuevo", component: ExpenseNewComponent },
      { path: "prestamo/:id", component: ExpenseEditComponent },
      { path: "prestamo/:id/editar", component: ExpenseEditComponent },

      { path: "prestamo/lista", component: ExpenseListComponent },
      { path: "prestamo/nuevo", component: ExpenseNewComponent },
      { path: "prestamo/:id", component: ExpenseEditComponent },
      { path: "prestamo/:id/editar", component: ExpenseEditComponent },

      { path: "usuario/lista", component: UserListComponent },
      { path: "usuario/nuevo", component: UserNewComponent },
      { path: "usuario/:id", component: UserEditComponent },
      { path: "usuario/:id/editar", component: UserEditComponent },
      { path: "prestamo/nuevo", component: LoanNewComponent },

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
