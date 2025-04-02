import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-main-content',
    imports: [RouterModule],
    template: `
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  `,
    styles: [`
    .main-content {
      padding: 16px;
    }
  `]
})
export class MainContentComponent { }