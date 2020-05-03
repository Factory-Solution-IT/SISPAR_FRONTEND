import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TithersComponent } from './tithers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TithersComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TithersModule { }
