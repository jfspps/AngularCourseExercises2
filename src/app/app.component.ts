import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDatabindingExercise';

  appCount: number = 0;

  // note the name outputValue must match that given in the @Output
  onCountChange(count: {outputValue: number}){
    this.appCount = count.outputValue;
  }

}
