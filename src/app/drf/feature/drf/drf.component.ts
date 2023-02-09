import { Component, ViewEncapsulation } from '@angular/core';
import { SwipeEvent } from 'ng-swipe';

@Component({
  selector: 'app-drf',
  templateUrl: './drf.component.html',
  styleUrls: ['./drf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DrfComponent {

  selectedIndex = 0;
  model = '/assets/dr4b/model.glb';

  images = [
    '/assets/dr4b/0.webp',
    '/assets/dr4b/image.webp',
    '/assets/dr4b/1.webp',
  ]

  description: string[] = [
    `<h2>Quantum Kick/Athon Version-10 September </h2>
    This version of the robot was made out of recycled parts from the last season with one main idea: a pivoting arm with two motors`,
    `<h2>Sliders Version - October-November 2022</h2>
    This version brought an L-shaped chassis and misumi sliders with a virtual four bar.
    <h3 class="pros">Advantages</h3>New claw using surgical tubes and Working virtual bar
    <h3 class="cons">Disdvantages</h3>Fragile string, Lack of stability and Easy to tangle the string
    `,
    `<h2>Double Reverse 4 Bar Version - December 2022</h2>
    We manufactured a double reverse 4 bar from aluminum bars while keeping the L-shapped chassis. 
    <h3 class="pros">Advantages</h3>Faster than slidersLinear up/down motion
    <h3 class="cons">Disdvantages</h3>Uses a lot of space, High part count, Inaccurate for cone stacks
    `,
    `<h2>Current version</h2>
    The latest iteration of the robot has an aluminum drivetrain with both horizontal 
    and vertical extensions. The vertical extension coupled with a virtual four bar 
    allows the robot to reach up to a high junction while the horizontal extension 
    helps with picking up cones from further away.  This system allowed the software 
    team to make the autonomy more reliable and automate more of the driver controlled mode.
    <h3 class="pros">Advantages</h3>Fast and reliable cycle time, Better autonomy, More software automations, retractable odometry
    <h3 class="cons">Disdvantages</h3>Bigger drivetrain, Cones must be transferred from the first claw to the second one, Risk of cones getting stuck inside the robot`,
  ];

  onSwipeEnd(event: SwipeEvent) {
    if (event.distance < 0) {
      this.selectedIndex =
        this.selectedIndex == this.description.length - 1
          ? this.selectedIndex
          : this.selectedIndex + 1;
    } else {
      this.selectedIndex = !this.selectedIndex ? 0 : this.selectedIndex - 1;
    }
  }
}
