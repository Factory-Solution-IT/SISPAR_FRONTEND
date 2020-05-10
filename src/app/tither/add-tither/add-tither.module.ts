import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTitherComponent } from './add-tither.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddTitherComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AddTitherModule { }
