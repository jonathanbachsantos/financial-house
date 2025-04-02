// src/app/services/finance.service.ts
import { Injectable } from '@angular/core';
import { Entry } from '../models/entry.model';
import { Exit } from '../models/exit.model';
import { Investment } from '../models/investment.model';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  private entries: Entry[] = [];
  private exits: Exit[] = [];
  private investments: Investment[] = [];

  constructor() {
    // Inicializa os arrays locais
    console.log('FinanceService inicializado com armazenamento local.');
  }

  private getData<T>(data: T[]): T[] {
    return [...data]; // Retorna uma cópia dos dados
  }

  private saveData<T>(data: T[], newData: T[]): void {
    data.length = 0; // Limpa o array original
    data.push(...newData); // Adiciona os novos dados
  }

  async addEntry(entry: Entry): Promise<void> {
    entry.id = this.entries.length > 0 ? this.entries[this.entries.length - 1].id + 1 : 1; // Gera um ID incremental
    this.entries.push(entry);
  }

  async addExit(exit: Exit): Promise<void> {
    exit.id = this.exits.length > 0 ? this.exits[this.exits.length - 1].id + 1 : 1; // Gera um ID incremental
    this.exits.push(exit);
  }

  async addInvestment(investment: Investment): Promise<void> {
    investment.id = this.investments.length > 0 ? this.investments[this.investments.length - 1].id + 1 : 1; // Gera um ID incremental
    this.investments.push(investment);
  }

  async getEntries(): Promise<Entry[]> {
    return this.getData<Entry>(this.entries);
  }

  async getExits(): Promise<Exit[]> {
    return this.getData<Exit>(this.exits);
  }

  async getInvestments(): Promise<Investment[]> {
    return this.getData<Investment>(this.investments);
  }
}