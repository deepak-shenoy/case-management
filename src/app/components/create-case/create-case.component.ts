/*
 * Case Management System (Style Sheet)
 * Create Case - Creates a new case
 * Deepak Shenoy
 * September 2024
 *
 */

import { Component, ViewChild } from '@angular/core';
import { Config, SubCase } from '../common/config';
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
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AddSubtaskCase } from "../add-subtask-case/add-subtask-case.component";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

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
        MatButtonToggleModule,
        MatTable,
        MatTableModule,
        MatPaginator,
    ],
    templateUrl: './create-case.component.html',
    styleUrl: './create-case.component.css'
})
export class CreateCase {
    @ViewChild(MatTable) subCaseTable!: MatTable<any>

    constructor(private dialog:MatDialog) {
    }

  caseCategory?: string;
  memberId?: string;
  caseStatus?: string;
  dateCaseFirstOpened: any;
  caseManager?: string;
  customerFullName?: string;
  memberFullName?: string;
  serviceProviderVendor?: string;
  secondaryVendor?: string;
  numberOfSubCases: number = 0;

  subCases: SubCase[] = new Array();
  subCase?: SubCase;
  displayedColumns: string[] = ['subCaseId', 'subCaseTitle'];

  // User adds sub-task to the case
  openAddSubTaskCaseDialog(): void {
     this.subCase = new SubCase();
     const addSubTaskDialog = this.dialog.open(AddSubtaskCase, {
         width: Config.addSubTaskCaseWidth,
        height: Config.addSubTaskCaseHeight,
        data: this.subCase
     });

    // User closes sub-task dialog
    addSubTaskDialog.afterClosed().subscribe((result: SubCase) => {
       console.log('RESULT>>', result);
       if(result.subCaseStatus != Config.CANCEL_SUBCASE_ENTRY) {
          this.subCases.push(result);
          this.numberOfSubCases = this.subCases.length;
          this.subCaseTable.renderRows();
       }
       console.log(this.subCases);
    })
  }
}
