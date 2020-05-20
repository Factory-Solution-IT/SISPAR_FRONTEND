import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitheComponent } from './tithe.component';
import { AddTitheModule } from './add-tithe/add-tithe.module';
import { EditTitheModule } from './edit-tithe/edit-tithe.module';
import { TitherModule } from '../tither/tither.module';

@NgModule({
  declarations: [TitheComponent],
  imports: [
    CommonModule,
    RouterModule,
    AddTitheModule,
    EditTitheModule,
    TitherModule
  ]
})
export class TitheModule { }
