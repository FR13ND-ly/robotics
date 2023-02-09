import { Component, Input } from '@angular/core';
import { DRACOLoaderService } from 'ngx-three';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent {

  constructor(private dracoLoader: DRACOLoaderService) {
    this.dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/libs/draco/gltf/');
  }

  @Input()
  modelUrl : string = "/assets/drone.glb"
}
