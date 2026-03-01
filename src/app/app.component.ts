// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketService } from './services/market.service';
import { MarketData } from './models/market.model';
import { HeaderComponent } from './components/header/header.component';
import { IndicesPanelComponent } from './components/indices-panel/indices-panel.component';
import { CommodityCardComponent } from './components/commodity-card/commodity-card.component';
import { SectorImpactComponent } from './components/sector-impact/sector-impact.component';
import { CurrencyPanelComponent } from './components/currency-panel/currency-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    IndicesPanelComponent,
    CommodityCardComponent,
    SectorImpactComponent,
    CurrencyPanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  marketData: MarketData | null = null;
  loading = true;
  error: string | null = null;
  lastUpdated = new Date();

  commodities = [
    { key: 'gold_mcx',      name: 'Gold',       icon: '🥇', exchange: 'MCX' },
    { key: 'silver_mcx',    name: 'Silver',     icon: '🥈', exchange: 'MCX' },
    { key: 'crude_oil_mcx', name: 'Crude Oil',  icon: '🛢️', exchange: 'MCX' }
  ] as const;

  constructor(private marketService: MarketService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.error = null;

    this.marketService.getData().subscribe({
      next: (data: MarketData) => {
        this.marketData = data;
        this.loading = false;
        this.lastUpdated = new Date();
      },
      error: (err) => {
        this.error = 'Failed to load market data. Please try again.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  getCommodity(key: string) {
    if (!this.marketData) return null;
    return (this.marketData.commodity_analysis_in_inr as any)[key];
  }
}
