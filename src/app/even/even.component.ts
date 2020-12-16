import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  // this might complain if tsconfig.json's "strict": true
  @Input() currentEven: number;

  constructor() {
   }

  ngOnInit(): void {
  }

}
