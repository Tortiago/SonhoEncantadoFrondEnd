import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import {
  MatFormFieldModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatNativeDateModule,
  MatButtonModule,
  MatTableModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule

} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class AngularMaterialModule { }
