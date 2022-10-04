import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; import { ExpenseEntryComponent } from './expense-entry/expense-entry.component'; 
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component'; 
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpenseGuard } from './expense.guard';
const routes: Routes = [ 
   { path: '', component: LoginComponent},
   { path: 'login', component: LoginComponent},
   { path: 'logout', component: LogoutComponent},
   { path: 'expenses', component: ExpenseEntryListComponent, canActivate: [ExpenseGuard] }, 
   { path: 'expenses/detail/:id', component: ExpenseEntryComponent, canActivate: [ExpenseGuard]},
   { path: '', redirectTo: 'expenses', pathMatch: 'full' }]; 
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] }) 
export class AppRoutingModule { }
