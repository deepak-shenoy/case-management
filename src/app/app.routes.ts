/*
 * Case Management System
 * Routes
 * Deepak Shenoy
 * September 2024
 *
 */

import { Routes } from '@angular/router';
import { Login } from './components/login/login.component';
import { CreateCase } from './components/create-case/create-case.component';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'create-case',
    component: CreateCase
  },
];