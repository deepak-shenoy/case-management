/*
 * Case Management System (Style Sheet)
 * Create Case - Creates a new case
 * Deepak Shenoy
 * September 2024
 *
 */

import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker' ;
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelect } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-case',
  standalone: true,
  imports: [
      CommonModule,
      MatFormField,
      MatInputModule,
      FormsModule,
      MatOption,
      MatSelectModule,
      MatSelect,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatDialogModule,
      MatDatepicker,
      MatButtonModule,
      MatButtonToggleModule
  ],
  templateUrl: './create-case.component.html',
  styleUrl: './create-case.component.css'
})
export class CreateCase {

  caseCategory?: string;
  pprId?: string;
  caseStatus?: string;
  dateCaseFirstOpened: any;
  caseManager?: string;
  customerFullName?: string;
  secondaryVendor?: string;
}
