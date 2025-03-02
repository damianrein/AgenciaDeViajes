import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenunavsComponent } from './components/menunavs/menunavs.component';
import { FooterappComponent } from './components/footerapp/footerapp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreatePackComponent } from './components/create-pack/create-pack.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenunavsComponent,
    FooterappComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CreatePackComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
