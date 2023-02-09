import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntakeComponent } from '../../ui/intake/intake.component';
import { DrivetrainComponent } from '../../ui/drivetrain/drivetrain.component';
import { DrfComponent } from '../../ui/drf/drf.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { SwipeModule } from 'ng-swipe';
import { InfoComponent } from '../../ui/info/info.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    DrfComponent,
    DrivetrainComponent,
    IntakeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    SwipeModule,
    RouterModule.forChild([
      { path: "", component: LandingPageComponent }
    ])
  ]
})
export class LandingPageShellModule { }
