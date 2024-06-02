import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenunavsComponent } from './menunavs/menunavs.component';
import { FooterappComponent } from './footerapp/footerapp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreatePackComponent } from './create-pack/create-pack.component';

@NgModule({
  declarations: [
    AppComponent,
    MenunavsComponent,
    FooterappComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CreatePackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
