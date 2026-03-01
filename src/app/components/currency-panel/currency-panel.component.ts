// src/app/components/currency-panel/currency-panel.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyImpact } from '../../models/market.model';

@Component({
  selector: 'app-currency-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-panel.component.html',
  styleUrls: ['./currency-panel.component.scss']
})
export class CurrencyPanelComponent {
  @Input() data!: CurrencyImpact;

  get statusClass(): string {
    const s = this.data?.status?.toLowerCase() ?? '';
    if (s.includes('weak') || s.includes('depreciat')) return 'bearish';
    if (s.includes('strong') || s.includes('appreciat')) return 'bullish';
    return 'neutral';
  }

  get statusIcon(): string {
    return this.statusClass === 'bearish' ? '▼' : this.statusClass === 'bullish' ? '▲' : '◆';
  }
}
