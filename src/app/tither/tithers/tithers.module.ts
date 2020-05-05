import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TithersComponent } from './tithers.component';
import { RouterModule } from '@angular/router';
import { AddTitherModule } from '../add-tither/add-tither.module';
import { EditTitherModule } from '../edit-tither/edit-tither.module';
import { DeleteTitherModule } from '../delete-tither/delete-tither.module';

@NgModule({
  declarations: [
    TithersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AddTitherModule,
    EditTitherModule,
    DeleteTitherModule
  ]
})
export class TithersModule { }
