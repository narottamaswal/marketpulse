// src/app/components/indices-panel/indices-panel.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexForecast } from '../../models/market.model';

export interface IndexCard {
  label: string;
  value: string | number;
  unit?: string;
  forecast?: string;
  trend: 'bearish' | 'bullish' | 'neutral' | 'warning';
}

@Component({
  selector: 'app-indices-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indices-panel.component.html',
  styleUrls: ['./indices-panel.component.scss']
})
export class IndicesPanelComponent {
  @Input() set niftyClose(v: number) { this.niftyValue = v; }
  @Input() set sensexClose(v: number) { this.sensexValue = v; }
  @Input() set indexForecast(v: IndexForecast) { this.forecast = v; }
  @Input() vixStatus: string = '';

  niftyValue = 0;
  sensexValue = 0;
  forecast: IndexForecast | null = null;

  get cards(): IndexCard[] {
    return [
      {
        label: 'NIFTY 50',
        value: this.niftyValue.toLocaleString('en-IN', { minimumFractionDigits: 2 }),
        forecast: this.forecast?.nifty_50 || '',
        trend: 'bearish'
      },
      {
        label: 'SENSEX',
        value: this.sensexValue.toLocaleString('en-IN', { minimumFractionDigits: 2 }),
        trend: 'bearish'
      },
      {
        label: 'NIFTY BANK',
        value: '—',
        forecast: this.forecast?.nifty_bank || '',
        trend: 'bearish'
      },
      {
        label: 'INDIA VIX',
        value: this.vixStatus,
        trend: 'warning'
      }
    ];
  }

  get openingSentiment(): string {
    return this.forecast?.opening_sentiment || '';
  }
}
