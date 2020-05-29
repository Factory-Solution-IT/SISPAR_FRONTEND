import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TithersModule } from './tither/tithers/tithers.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TitheModule } from './tithe/tithe.module';
import { SiginModule } from './sigin/sigin/sigin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TithersModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    ReactiveFormsModule,
    TitheModule,
    SiginModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
