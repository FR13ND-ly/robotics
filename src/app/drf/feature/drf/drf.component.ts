import { Component, ViewEncapsulation } from '@angular/core';
import { SwipeEvent } from 'ng-swipe';

@Component({
  selector: 'app-drf',
  templateUrl: './drf.component.html',
  styleUrls: ['./drf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DrfComponent {

  selectedIndex = 1;
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
    <h3 class="pros">Advantages</h3>
    <ul>
      <li>New claw using surgical tubes</li> 
      <li>Working virtual bar</li>
    </ul>
    <h3 class="cons">Disadvantages</h3>
    <ul>
      <li>Fragile string</li>
      <li>Lack of stability</li>
      <li>Easy to tangle the string</li>
    </ul>
    `,
    `<h2>Double Reverse 4 Bar Version - December 2022</h2>
    We manufactured a double reverse 4 bar from aluminum bars while keeping the L-shapped chassis. 
    <h3 class="pros">Advantages</h3>
    <ul>
      <li>Faster than slidersLinear up/down motion</li>
    </ul>
    <h3 class="cons">Disadvantages</h3>
    <ul>
      <li>Uses a lot of space</li> 
      <li>High part count</li>
      <li>Inaccurate for cone stacks</li>
    </ul>
    `,
    `<h2>Current version</h2>
    The latest iteration of the robot has an aluminum drivetrain with both horizontal 
    and vertical extensions. The vertical extension coupled with a virtual four bar 
    allows the robot to reach up to a high junction while the horizontal extension 
    helps with picking up cones from further away.  This system allowed the software 
    team to make the autonomy more reliable and automate more of the driver controlled mode.
    <h3 class="pros">Advantages</h3>
    <ul>
      <li>Fast and reliable cycle time</li>
      <li>Better autonomy</li>
      <li>More software automations</li>
      <li>retractable odometry</li>
    </ul>
    <h3 class="cons">Disdvantages</h3>
    <ul>
      <li>Bigger drivetrain</li> 
      <li>Cones must be transferred from the first claw to the second one</li>
      <li>Risk of cones getting stuck inside the robot</li>
    </ul>`,
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
