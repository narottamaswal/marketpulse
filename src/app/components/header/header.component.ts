// src/app/components/header/header.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() triggers: string[] = [];
  @Input() vixStatus: string = '';
  @Input() lastUpdated: Date = new Date();
}
