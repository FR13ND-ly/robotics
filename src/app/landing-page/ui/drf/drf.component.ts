import { Component, OnInit } from '@angular/core';
import { delay, interval } from 'rxjs';

@Component({
  selector: 'app-drf',
  templateUrl: './drf.component.html',
  styleUrls: ['./drf.component.scss']
})
export class DrfComponent implements OnInit {
  
  interval$ : any

  title = "double ReVerse fourbAR"
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  ngOnInit() {
    // let iteration = 0;
    // this.interval$ = interval(20).pipe(delay(200)).subscribe(() => {
    //   this.title = this.title
    //   .split("")
    //   .map((letter, index) => {
    //     if(index < iteration) {
    //       return "double ReVerse fourbAR"[index];
    //     }
      
    //     return this.letters[Math.floor(Math.random() * 26)]
    //   })
    //   .join("");
    //   if(iteration >= "double ReVerse fourbAR".length){ 
    //     this.interval$.unsubscribe();
    //   }
      
    //   iteration += 1 / 3;
    // })
  }
}
