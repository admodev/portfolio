import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <ng-content></ng-content>
    </main>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      main {
        flex: 1;
      }
    `,
  ],
})
export class LayoutComponent {}