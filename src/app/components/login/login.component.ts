/*
 * Case Management System (Style Sheet)
 * Login Component
 * Deepak Shenoy
 * September 2024
 *
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatIcon,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class Login {

  userId = '';

  clearUserId() {
    this.userId = '';
  }

  validateAndLogin() {
    console.log(this.userId)
    try {
      console.log("Integration with login - for testing purposes");
    } catch(e) {
      console.log("Error - exception occurred when trying to get user with message: ", e);
    }
  }
}
