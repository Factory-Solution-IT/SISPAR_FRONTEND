import { DeleteTitheModule } from './delete-tithe/delete-tithe.module';
import { NgModule } from '@angular/core';
import { AddTitheModule } from './add-tithe/add-tithe.module';
import { EditTitheModule } from './edit-tithe/edit-tithe.module';
import { TithesModule } from './tithes/tithes.module';

@NgModule({
  declarations: [],
  imports: [
    TithesModule,
    AddTitheModule,
    EditTitheModule,
    DeleteTitheModule
  ]
})
export class TitheModule { }
