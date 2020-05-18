import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTitheComponent } from './add-tithe.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddTitheComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AddTitheModule { }
