/*
 * Case Management System (Style Sheet)
 * Sub Case - For adding a Sub Case to a main or header case
 * Deepak Shenoy
 * September 2024
 *
 */

import { Component, Inject } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CommonModule } from '@angular/common';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Config, SubCase, SubCaseItem } from "../common/config";

@Component({
  selector: 'app-add-subtask-case',
  standalone: true,
  imports: [
    MatButton,
    MatDialogClose,
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
    MatButtonToggleModule,
  ],
  templateUrl: './add-subtask-case.component.html',
  styleUrl: './add-subtask-case.component.css'
})
export class AddSubtaskCase {
  constructor(public dialogRef: MatDialogRef<AddSubtaskCase>, @Inject(MAT_DIALOG_DATA) public subCase: SubCase) {
  }

  closeSubCaseItem() {
    this.subCase.subCaseStatus = Config.CANCEL_SUBCASE_ENTRY;
    this.dialogRef.close(this.subCase);
  }
}
