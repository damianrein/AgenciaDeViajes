import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreatePackComponent } from './components/create-pack/create-pack.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'create-pack', component:CreatePackComponent},
  {path:'',redirectTo:'dashboard', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
