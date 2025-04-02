// src/app/components/dashboard/dashboard.component.ts
import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { saveAs } from 'file-saver';
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement
} from 'chart.js';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { isPlatformBrowser } from '@angular/common';

Chart.register(BarController, LinearScale, CategoryScale, BarElement);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit {
  entries: any[] = [];
  exits: any[] = [];
  totalEntries: number = 0;
  totalExits: number = 0;
  chart: any;

  constructor(
    private financeService: FinanceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.financeService.getEntries().then(entries => {
      this.entries = entries;
      this.calculateTotals();
    });
    this.financeService.getExits().then(exits => {
      this.exits = exits;
      this.calculateTotals();
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
    }
  }

  calculateTotals() {
    this.totalEntries = this.entries.reduce((sum, entry) => sum + entry.value, 0);
    this.totalExits = this.exits.reduce((sum, exit) => sum + exit.value, 0);
    // Atualiza o gráfico após recalcular os totais
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
    }
  }

  createChart() {
    const ctx = document.getElementById('financeChart') as HTMLCanvasElement;
  
    if (this.chart) {
      // Atualiza os dados do gráfico existente
      this.chart.data.datasets[0].data = [this.totalEntries, this.totalExits];
      this.chart.update();
    } else if (ctx) {
      // Cria o gráfico se ele ainda não existir
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Entradas', 'Saídas'],
          datasets: [{
            label: 'Total',
            data: [this.totalEntries, this.totalExits],
            backgroundColor: ['#4CAF50', '#F44336'],
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  exportData() {
    const data = {
      entries: this.entries,
      exits: this.exits,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    saveAs(blob, 'finance-data.json');
  }

  importData(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const importedData = JSON.parse(e.target.result);
        this.entries = importedData.entries || [];
        this.exits = importedData.exits || [];
        this.calculateTotals();
      };
      reader.readAsText(file);
    }
  }
}