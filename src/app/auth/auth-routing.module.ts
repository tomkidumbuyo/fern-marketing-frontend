import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [{
  path: 'auth',
  component: AuthComponent,
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent,
    // canActivate: [LoginGuard]
  }, {
    path: 'reset-password',
    component: ResetPasswordComponent,
    // canActivate: [LoginGuard]
  }, {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    // canActivate: [LoginGuard]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
