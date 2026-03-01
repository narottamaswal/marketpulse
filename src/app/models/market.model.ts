// src/app/models/market.model.ts

export interface MarketContext {
  primary_triggers: string[];
  nifty_50_last_close: number;
  sensex_last_close: number;
  vix_status: string;
}

export interface CommodityDetail {
  current_price_approx: string;
  prediction: string;
  expected_range?: string;
  target?: string;
  reason: string;
  action: string;
}

export interface CommodityAnalysis {
  gold_mcx: CommodityDetail;
  silver_mcx: CommodityDetail;
  crude_oil_mcx: CommodityDetail;
}

export interface IndexForecast {
  nifty_50: string;
  nifty_bank: string;
  opening_sentiment: string;
}

export interface SectorEntry {
  sector: string;
  stocks: string[];
  reason: string;
}

export interface SectoralImpact {
  positive_sentiment: SectorEntry[];
  negative_sentiment: SectorEntry[];
}

export interface StockMarketStrategy {
  index_forecast: IndexForecast;
  sectoral_impact: SectoralImpact;
}

export interface CurrencyImpact {
  pair: string;
  status: string;
  expected_level: string;
  reason: string;
}

export interface MarketData {
  market_context: MarketContext;
  commodity_analysis_in_inr: CommodityAnalysis;
  stock_market_strategy: StockMarketStrategy;
  currency_impact: CurrencyImpact;
}
