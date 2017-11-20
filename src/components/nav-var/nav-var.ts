import { Component } from '@angular/core';

/**
 * Generated class for the NavVarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-var',
  templateUrl: 'nav-var.html'
})
export class NavVarComponent {

  text: string;

  constructor() {
    console.log('Hello NavVarComponent Component');
    this.text = 'Hello World';
  }

}
