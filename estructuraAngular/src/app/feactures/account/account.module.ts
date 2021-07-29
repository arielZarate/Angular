import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './account.component';

@NgModule({
  //importo los componentes que voy utilizar
  declarations: [AccountComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AccountRoutingModule],
  //exporto los componentes que se usaran en el account-routing
  exports: [LoginComponent, RegisterComponent, AccountComponent],
})
export class AccountModule {}
