import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

const routes: Routes = [
{path: '' , redirectTo:'login', pathMatch:'full'},
{path: 'login' , component: LoginComponent},
{path: 'dashboard' , component: DashboardComponent},
{path: 'register' , component: RegisterComponent},
{ path: 'password-reset', component: PasswordResetComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
