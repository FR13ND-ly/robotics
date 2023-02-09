import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrfComponent } from '../drf/drf.component';
import { SwipeModule } from 'ng-swipe';
import { HeaderComponent } from '../../ui/header/header.component';
import { TimelineComponent } from '../../ui/timeline/timeline.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxThreeModule } from 'ngx-three';
import { RobotComponent } from '../robot/robot.component';

@NgModule({
  declarations: [
    DrfComponent,
    HeaderComponent,
    TimelineComponent,
    RobotComponent
  ],
  imports: [
    CommonModule,
    SwipeModule,
    MatIconModule,
    NgxThreeModule,
    RouterModule.forChild([
      { path: "", component: DrfComponent}
    ])
  ],
})
export class DrfShellModule { }
