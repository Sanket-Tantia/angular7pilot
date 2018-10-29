import { Component } from '@angular/core';
/**
 * Component Decorator
 */
@Component({
  selector: 'app-root', //uniqur name
  templateUrl: './app.component.html', //specifies the html for the component
  styleUrls: ['./app.component.scss']
})

/**
 * Logic of the component
 */
export class AppComponent {
  title = 'ng7Pilot';
}
