// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { FinanceService } from './app/services/finance.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    FinanceService // Adicione o serviço aqui
  ]
});