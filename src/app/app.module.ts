import { FooterComponent } from './core/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './core/header/header.component';
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
import { DatePipe } from '@angular/common';
import { CoreModule } from './core/core.module';
import { TitherModule } from './tither/tither.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule,
    HomeModule,
    ReactiveFormsModule,
    TitheModule,
    SiginModule,
    BrowserAnimationsModule,
    CoreModule,
    TitherModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
