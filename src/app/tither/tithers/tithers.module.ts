import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TithersComponent } from './tithers.component';
import { RouterModule } from '@angular/router';
import { AddTitherModule } from '../add-tither/add-tither.module';

@NgModule({
  declarations: [
    TithersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AddTitherModule
  ]
})
export class TithersModule { }
