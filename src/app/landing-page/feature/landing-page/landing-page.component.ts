import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SwipeEvent } from 'ng-swipe';
import { BehaviorSubject, pairwise } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
  constructor(private ref: ChangeDetectorRef) {}

  $selectedSlide : BehaviorSubject<number> = new BehaviorSubject(0)
  right : boolean = true

  ngOnInit() {
    this.$selectedSlide.pipe(pairwise()).subscribe((res) => {
      this.right = res[0] < res[1]
    })
  }

  onSwipeEnd(event: SwipeEvent) {
    if (event.distance < 0) {
      this.$selectedSlide.next((this.$selectedSlide.value + 1) % 3)
      this.right = false
    }
    else {
      this.$selectedSlide.next(!this.$selectedSlide.value ? 2 : this.$selectedSlide.value - 1)
      this.right = true
    }
    this.ref.detectChanges()
  }
}
