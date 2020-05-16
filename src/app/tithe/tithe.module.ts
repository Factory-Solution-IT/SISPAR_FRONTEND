import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitheComponent } from './tithe.component';

@NgModule({
  declarations: [TitheComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TitheModule { }
