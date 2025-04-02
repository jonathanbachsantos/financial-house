import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [RouterModule, MatListModule, MatIconModule ],
    template: `
    <mat-nav-list>
        <mat-list-item>
            <a mat-icon-button routerLink="/dashboard"><mat-icon>dashboard</mat-icon></a>
        </mat-list-item>
        <mat-list-item>
      <a mat-icon-button routerLink="/entries"><mat-icon>payments</mat-icon></a>
      </mat-list-item><mat-list-item><a mat-icon-button routerLink="/exits"><mat-icon>money_off</mat-icon></a></mat-list-item>
      <mat-list-item>
      <a mat-icon-button routerLink="/investments"><mat-icon>savings</mat-icon></a>
      </mat-list-item>
    </mat-nav-list>
  `,
  styles: [`
    mat-nav-list {
        max-width: 200px; /* Define a largura máxima */
        margin: 0 auto; /* Centraliza o componente */
    }
`]
})
export class NavigationComponent { }