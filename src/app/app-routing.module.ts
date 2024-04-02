import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { MealDisplayComponent } from './meal-diplay/meal-diplay.component';
import { HomeComponent } from './component/home/home.component';
import { GallerieComponent } from './component/gallerie/gallerie.component';

const routes: Routes = [
{path: '' , redirectTo:'home', pathMatch:'full'},
{ path: 'home',component: HomeComponent},
{path: 'register' , component: RegisterComponent},
{path: 'login' , component: LoginComponent},
{path: 'dashboard' , component: DashboardComponent},
{ path: 'password-reset', component: PasswordResetComponent},
{ path: 'meal',component: MealDisplayComponent},
{ path: 'galerie',component: GallerieComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
