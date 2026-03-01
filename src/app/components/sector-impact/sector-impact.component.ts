// src/app/components/sector-impact/sector-impact.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectoralImpact, SectorEntry } from '../../models/market.model';

@Component({
  selector: 'app-sector-impact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sector-impact.component.html',
  styleUrls: ['./sector-impact.component.scss']
})
export class SectorImpactComponent {
  @Input() sectoralImpact!: SectoralImpact;

  get positives(): SectorEntry[] {
    return this.sectoralImpact?.positive_sentiment ?? [];
  }

  get negatives(): SectorEntry[] {
    return this.sectoralImpact?.negative_sentiment ?? [];
  }
}
