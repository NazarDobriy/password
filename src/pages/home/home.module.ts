import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordService } from './providers/password.service';
import { PasswordStatusFieldComponent } from './components/password-input/password-status-field/password-status-field.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, PasswordInputComponent, PasswordStatusFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [PasswordService]
})
export class HomeModule { }
