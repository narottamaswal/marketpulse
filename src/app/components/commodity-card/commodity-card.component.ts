// src/app/components/commodity-card/commodity-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommodityDetail } from '../../models/market.model';

@Component({
  selector: 'app-commodity-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commodity-card.component.html',
  styleUrls: ['./commodity-card.component.scss']
})
export class CommodityCardComponent {
  @Input() name: string = '';
  @Input() icon: string = '';
  @Input() exchange: string = 'MCX';
  @Input() data!: CommodityDetail;

  get isBullish(): boolean {
    return this.data?.prediction?.toLowerCase().includes('bull') ?? false;
  }

  get predictionClass(): string {
    const p = this.data?.prediction?.toLowerCase() ?? '';
    if (p.includes('steep')) return 'steep-bull';
    if (p.includes('bull')) return 'bull';
    if (p.includes('bear')) return 'bear';
    return 'neutral';
  }

  get actionClass(): string {
    const a = this.data?.action?.toLowerCase() ?? '';
    if (a.includes('buy')) return 'action-buy';
    if (a.includes('sell')) return 'action-sell';
    return 'action-hold';
  }

  get rangeDisplay(): string {
    return this.data?.expected_range || this.data?.target || '—';
  }
}
