import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TithersComponent } from './tither/tithers/tithers.component';
import { TitheComponent } from './tithe/tithe.component';
import { AddTitherComponent } from './tither/add-tither/add-tither.component';
import { EditTitherComponent } from './tither/edit-tither/edit-tither.component';
import { DeleteTitherComponent } from './tither/delete-tither/delete-tither.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tithe',
    pathMatch: 'full',
    component: TitheComponent
  },
  {
    path: 'tithers',
    component: TithersComponent,
  },
  {
    path: 'add-tither',
    component: AddTitherComponent,
  },
  {
    path: 'edit-tither/:titherId',
    component: EditTitherComponent,
  },
  {
    path: 'delete-tither/:titherId',
    component: DeleteTitherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
