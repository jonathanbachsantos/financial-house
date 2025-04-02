// src/app/components/exit-form/exit-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FinanceService } from '../../services/finance.service';
import { Exit } from '../../models/exit.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-exit-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './exit-form.component.html',
})
export class ExitFormComponent {
  exitForm: FormGroup;

  constructor(private fb: FormBuilder, private financeService: FinanceService) {
    this.exitForm = this.fb.group({
      description: [''],
      value: [0],
      receiptImage: [''],
      date: [new Date()]
    });
  }

  onSubmit() {
    const newExit: Exit = { id: Date.now(), ...this.exitForm.value };
    this.financeService.addExit(newExit);
    this.exitForm.reset();
  }
}