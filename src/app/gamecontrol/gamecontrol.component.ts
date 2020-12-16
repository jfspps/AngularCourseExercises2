import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  currentCount: number;

  // ref contains the ID or ref to this setInterval()
  ref: any;

  constructor() {
    this.currentCount = 0;
   }

  ngOnInit(): void {
  }
  
  start(){
    console.log("Game started.");
    this.ref = setInterval(() =>{ console.log(this.currentCount++); }, 1000);;
  }

  pause(){
    clearInterval(this.ref);
    // retrieve and save current count
    console.log("Game stopped at " + this.currentCount);
  }
}
