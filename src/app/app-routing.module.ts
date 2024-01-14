import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TncComponent } from './tnc/tnc.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'termsandconditions', component: TncComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
