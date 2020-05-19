import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitheComponent } from './tithe.component';
import { AddTitheModule } from './add-tithe/add-tithe.module';

@NgModule({
  declarations: [TitheComponent],
  imports: [
    CommonModule,
    RouterModule,
    AddTitheModule
  ]
})
export class TitheModule { }
