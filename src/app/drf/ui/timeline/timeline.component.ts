import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  
  @Input()
  selectedIndex : number = 0

  @Output()
  selectedIndexChange:EventEmitter<number> = new EventEmitter<number>();

  keyframes = [
    'first stage',
    'second stage',
    'third stage',
    'final stage'
  ]

  onSelect(index: number) {
    this.selectedIndex = index
    this.selectedIndexChange.emit(index)
  }

  onSelectLine(index: number) {
    if (this.selectedIndex > index) this.selectedIndex--
    else this.selectedIndex++
    this.selectedIndexChange.emit(this.selectedIndex)
  }
}