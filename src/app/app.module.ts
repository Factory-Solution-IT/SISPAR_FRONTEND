import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TithersModule } from './tither/tithers/tithers.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TithersModule,
    AppRoutingModule,
    RouterModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
