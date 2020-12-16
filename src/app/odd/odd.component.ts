import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  // this might complain if tsconfig.json's "strict": true
  @Input() currentOdd: number;

  constructor() { }

  ngOnInit(): void {
  }

}
