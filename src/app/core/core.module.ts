import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatList, MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})

export class CoreModule { }
