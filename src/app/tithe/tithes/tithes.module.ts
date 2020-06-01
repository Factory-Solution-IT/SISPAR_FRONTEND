import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TithesComponent } from './tithes.component';
import { RouterModule } from '@angular/router';
import { EditTitheModule } from '../edit-tithe/edit-tithe.module';
import { DeleteTitheModule } from '../delete-tithe/delete-tithe.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TithesComponent],
  imports: [
    CommonModule,
    RouterModule,
    EditTitheModule,
    DeleteTitheModule,
    HttpClientModule
  ]
})
export class TithesModule { }
