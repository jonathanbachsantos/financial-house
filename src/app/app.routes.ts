import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EntryFormComponent } from './components/entry-form/entry-form.component';
import { ExitFormComponent } from './components/exit-form/exit-form.component';
import { InvestmentsComponent } from './components/investments/investments.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entries', component: EntryFormComponent },
  { path: 'exits', component: ExitFormComponent },
  { path: 'investments', component: InvestmentsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

