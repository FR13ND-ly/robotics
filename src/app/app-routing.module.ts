import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrfComponent } from './drf/feature/drf/drf.component';
import { LandingPageComponent } from './landing-page/feature/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component : LandingPageComponent,},
  { path: 'drf', component: DrfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
