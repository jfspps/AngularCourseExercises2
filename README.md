# AngularDatabindingExercise

This project shows how to implment databinding, between a child and parent component using `[property_name]`.

In detail, the `game-control` component starts a timer using `setInterval()` to emit a value `currentCount`. The start and stop processes are handled by `game-control`'s template. The parent appComponent then stores the value ass `appCount`. The value is then bound (one-way) to child components `even` or `odd` , regardless of the value, using `@Input` and `[currentEven]="appCount"` and `[currentOdd]="appCount"`. The template of both `even` and `odd` components determines how the values the displayed and the appComponent template determines when (via an ngIf directive) they are displayed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
