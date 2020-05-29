import { DeleteTitheModule } from './delete-tithe/delete-tithe.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitheComponent } from './tithe.component';
import { AddTitheModule } from './add-tithe/add-tithe.module';
import { EditTitheModule } from './edit-tithe/edit-tithe.module';
import { TitherModule } from '../tither/tither.module';

@NgModule({
  declarations: [
    TitheComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AddTitheModule,
    EditTitheModule,
    DeleteTitheModule,
    TitherModule,
    HttpClientModule
  ]
})
export class TitheModule { }
