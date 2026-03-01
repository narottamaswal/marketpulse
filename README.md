# MarketPulse India — Angular Dashboard

Real-time NSE/BSE/MCX market analysis dashboard with geopolitical context overlays.

## Project Structure

```
src/
├── app/
│   ├── models/
│   │   └── market.model.ts          ← All TypeScript interfaces
│   ├── services/
│   │   └── market.service.ts        ← getData() API service
│   ├── components/
│   │   ├── header/                  ← Sticky header + live triggers
│   │   ├── indices-panel/           ← Nifty, Sensex, Bank, VIX cards
│   │   ├── commodity-card/          ← Reusable Gold / Silver / Crude cards
│   │   ├── sector-impact/           ← Positive + Negative sector columns
│   │   └── currency-panel/          ← USD/INR card with FII indicator
│   ├── app.component.ts/html/scss   ← Root shell, orchestrates data fetch
├── styles.scss                      ← Global design tokens + reset
├── index.html
└── main.ts
```

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Open browser
# http://localhost:4200
```

## API Configuration

Edit `src/app/services/market.service.ts`:

```typescript
private readonly API_URL = 'https://your-api.com/api';
```

The `getData()` method calls `GET /market-analysis` and expects the JSON shape
defined in `market.model.ts`. If the API is unreachable, it falls back to built-in
mock data so the UI always renders during development.

## Key Design Decisions

- **Standalone components** — no NgModule boilerplate (Angular 17+)
- **provideHttpClient()** — tree-shakeable HTTP setup in `main.ts`
- **CSS variables** — single design token source in `styles.scss`
- **Responsive grid** — 4-col → 2-col → 1-col at breakpoints
- **Trend indicators** — color-coded borders + badges per prediction type

## Expected API Response Shape

```json
{
  "market_context": { ... },
  "commodity_analysis_in_inr": { "gold_mcx": {...}, "silver_mcx": {...}, "crude_oil_mcx": {...} },
  "stock_market_strategy": { "index_forecast": {...}, "sectoral_impact": {...} },
  "currency_impact": { ... }
}
```
