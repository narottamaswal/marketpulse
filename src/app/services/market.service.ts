// src/app/services/market.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MarketData } from '../models/market.model';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  // Replace with your actual API base URL
  private readonly API_URL = 'https://your-api.com/api';

  // Fallback mock data for development / when API is unavailable
  private readonly MOCK_DATA: MarketData = {
    market_context: {
      primary_triggers: [
        'US-Israel preemptive strikes on Iran (Top leadership casualties reported)',
        'Iranian retaliatory missile strikes on US bases and Gulf states (UAE, Qatar)'
      ],
      nifty_50_last_close: 25178.65,
      sensex_last_close: 81287.19,
      vix_status: 'Elevated - High Panic Sentiment'
    },
    commodity_analysis_in_inr: {
      gold_mcx: {
        current_price_approx: '₹1,61,971 per 10g',
        prediction: 'BULLISH (Gap-up)',
        expected_range: '₹1,64,000 - ₹1,68,000',
        reason: 'Massive safe-haven buying triggered by unprecedented Middle East escalation.',
        action: 'BUY / HOLD'
      },
      silver_mcx: {
        current_price_approx: '₹1,18,500 per kg',
        prediction: 'BULLISH',
        expected_range: '₹1,20,000 - ₹1,25,000',
        reason: "Tracking gold's massive rally and industrial supply chain fears.",
        action: 'BUY'
      },
      crude_oil_mcx: {
        current_price_approx: '₹6,012 - ₹6,100 per barrel',
        prediction: 'STEEP BULLISH',
        target: '₹6,500+',
        reason: 'Escalation involving oil-producing Gulf nations and Strait of Hormuz threat. Brent pushing past $72/barrel.',
        action: 'BUY (Stop-loss at ₹5,800)'
      }
    },
    stock_market_strategy: {
      index_forecast: {
        nifty_50: 'Bearish (Support at 24,200 - 24,500)',
        nifty_bank: 'Bearish (Support at 59,500)',
        opening_sentiment: 'Significant gap-down likely'
      },
      sectoral_impact: {
        positive_sentiment: [
          {
            sector: 'Defense',
            stocks: ['HAL', 'Bharat Forge', 'Mazagon Dock'],
            reason: 'Surge in geopolitical conflict and expected defense spending.'
          },
          {
            sector: 'Oil Exploration',
            stocks: ['ONGC', 'Oil India'],
            reason: 'Higher realization on crude sales due to spiking global oil prices.'
          }
        ],
        negative_sentiment: [
          {
            sector: 'Aviation',
            stocks: ['InterGlobe (IndiGo)', 'SpiceJet'],
            reason: 'Skyrocketing ATF (fuel) costs and suspended Middle East flight routes.'
          },
          {
            sector: 'Paints/Tyres',
            stocks: ['Asian Paints', 'MRF'],
            reason: 'Crude-linked raw material costs will spike significantly.'
          },
          {
            sector: 'Exporters',
            stocks: ['IT', 'Textiles'],
            reason: 'Logistics/Freight disruptions, airspace closures, and insurance premium hikes.'
          }
        ]
      }
    },
    currency_impact: {
      pair: 'USD/INR',
      status: 'Weakening',
      expected_level: '₹91.20 - ₹91.50',
      reason: 'Dollar strength (USD/INR currently ~91.08) and heavy FII outflow from emerging markets due to war panic.'
    }
  };

  constructor(private http: HttpClient) {}

  /**
   * Primary data fetch method — calls the API endpoint.
   * Falls back to mock data if API is unreachable.
   */
  getData(): Observable<MarketData> {
    return this.http.get<MarketData>(`http://localhost:8080/api/getData`).pipe(
      tap(() => console.log('[MarketService] Data fetched from API')),
      catchError((error: HttpErrorResponse) => {
        console.warn('[MarketService] API unavailable, using mock data.', error.message);
        return of(this.MOCK_DATA);
      })
    );
  }

  /**
   * Fetch data for a specific date (optional endpoint)
   */
  getDataByDate(date: string): Observable<MarketData> {
    return this.http.get<MarketData>(`${this.API_URL}/market-analysis?date=${date}`).pipe(
      catchError(() => of(this.MOCK_DATA))
    );
  }
}
