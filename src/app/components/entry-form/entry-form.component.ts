// src/app/components/entry-form/entry-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FinanceService } from '../../services/finance.service';
import { Entry } from '../../models/entry.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-entry-form',
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
  templateUrl: './entry-form.component.html',
})
export class EntryFormComponent {
  entryForm: FormGroup;

  constructor(private fb: FormBuilder, private financeService: FinanceService) {
    this.entryForm = this.fb.group({
      description: [''],
      value: [0],
      source: [''],
      date: [new Date()]
    });
  }

  onSubmit() {
    const newEntry: Entry = { id: Date.now(), ...this.entryForm.value };
    this.financeService.addEntry(newEntry);
    this.entryForm.reset();
  }
}