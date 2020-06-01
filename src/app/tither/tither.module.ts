import { NgModule } from '@angular/core';
import { TithersModule } from './tithers/tithers.module';
import { AddTitherModule } from './add-tither/add-tither.module';
import { EditTitherModule } from './edit-tither/edit-tither.module';
import { DeleteTitherModule } from './delete-tither/delete-tither.module';

@NgModule({
  declarations: [],
  imports: [
    TithersModule,
    AddTitherModule,
    EditTitherModule,
    DeleteTitherModule
  ]
})
export class TitherModule { }
