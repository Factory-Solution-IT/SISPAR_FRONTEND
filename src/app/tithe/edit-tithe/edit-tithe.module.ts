import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTitheComponent } from './edit-tithe.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EditTitheComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EditTitheModule { }
