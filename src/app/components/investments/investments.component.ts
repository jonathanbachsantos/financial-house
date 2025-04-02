// src/app/components/investments/investments.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FinanceService } from '../../services/finance.service';
import { Investment } from '../../models/investment.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './investments.component.html',
})
export class InvestmentsComponent {
  investmentForm: FormGroup;
  investments: Investment[] = [];

  constructor(private fb: FormBuilder, private financeService: FinanceService) {
    this.investmentForm = this.fb.group({
      name: [''],
      amount: [0],
      date: [new Date()],
      returnRate: [0]
    });
    this.loadInvestments();
  }

  loadInvestments() {
    this.financeService.getInvestments().then((investments) => {
      this.investments = investments;
    });
  }

  onSubmit() {
    const newInvestment: Investment = { id: Date.now(), ...this.investmentForm.value };
    this.financeService.addInvestment(newInvestment);
    this.investmentForm.reset();
    this.loadInvestments();
  }

  exportInvestments() {
    const data = {
      investments: this.investments,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    saveAs(blob, 'investments-data.json');
  }

  importInvestments(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const importedData = JSON.parse(e.target.result);
        this.investments = importedData.investments || [];
        //this.loadInvestments();
      };
      reader.readAsText(file);
    }
  }
}