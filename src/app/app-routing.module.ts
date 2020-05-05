import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TitherComponent } from './tither/tither.component';
import { TithersComponent } from './tither/tithers/tithers.component';
import { AddTitherComponent } from './tither/add-tither/add-tither.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
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
    path: 'tither',
    component: TitherComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
