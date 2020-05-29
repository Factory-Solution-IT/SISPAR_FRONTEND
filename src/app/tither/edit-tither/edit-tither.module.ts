import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTitherComponent } from './edit-tither.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditTitherComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EditTitherModule { }
