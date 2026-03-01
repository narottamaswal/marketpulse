# 🛡️ MarketPulse | Real-Time Global Conflict & Market Impact Tracker

[![Angular](https://img.shields.io/badge/Angular-17+-red.svg)](https://angular.io/)
[![Java Version](https://img.shields.io/badge/Java-21-orange.svg)](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
[![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud-Function-green.svg)](https://spring.io/projects/spring-cloud-function)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini%20Pro-blue.svg)](https://deepmind.google/technologies/gemini/)

In a world where a single headline can shift markets in minutes, staying informed isn't just an advantage—it's a necessity. **MarketPulse** bridges the gap between global geopolitical unrest and your portfolio.

---

## 📖 Description

**MarketPulse** is an automated intelligence dashboard that monitors global warfare and geopolitical shifts to predict commodity and stock market movements.

Unlike traditional news tickers, this project uses **GDELT BigQuery** to scrape raw, real-time global events. It then leverages **Gemini AI** to perform a "War-Room" analysis, translating complex conflict data into simple Buy/Sell signals for commodities and the Indian Stock Market. The data is purely informational and updates every 30 minutes via a scheduled cloud synchronization.

---

## ✨ Key Features

* **Zero-Inertia UI:** A clean, "display-only" Angular frontend. No buttons, no CTAs—just pure, high-density data.
* **GDELT Intelligence:** Scrapes the Global Database of Events, Language, and Tone (GDELT) via BigQuery to catch events roughly 5 minutes after they occur.
* **AI-Powered Analysis:** Uses Gemini AI to interpret how specific war escalations (e.g., Strait of Hormuz closures) affect Crude Oil, Gold, and the Nifty/Sensex.
* **Serverless Efficiency:** Powered by **Spring Cloud Functions** to handle data processing and storage with minimal overhead.
* **Automated Pulse:** A 30-minute Cron scheduler ensures the analysis is always fresh without manual intervention.

---

## 🏗 System Architecture

The project follows a modern, automated pipeline:

1.  **Data Extraction:** A scheduler triggers a query to **GDELT BigQuery** to identify high-intensity "Conflict" and "Protest" events globally.
2.  **AI Inference:** The raw event data is sent to **Gemini**, acting as an Indian Stock Market Expert, to generate a structured JSON analysis.
3.  **Storage:** The analyzed intelligence is stored and served via a **Spring Cloud Function** backend.
4.  **Visualization:** An **Angular** frontend polls the API to display the latest `MarketPulse` JSON payload in a readable, categorized format.

---

## 🚀 Tech Stack

* **Frontend:** Angular (Signals-based, RxJS for data polling)
* **Backend:** Java 21, Spring Boot 3.x, Spring Cloud Function
* **Data Source:** GDELT Project (BigQuery API)
* **LLM:** Google Gemini Pro
* **Deployment:** Vercel (Frontend), AWS Lambda/Azure Functions (Backend)

---

## 🛠 Setup & Installation

### 1. Backend (The Intelligence Layer)
1.  Navigate to the cloud-function directory:
    ```bash
    cd MarketPulse-backend
    ```
2.  Configure your `application.yml` with:
    * `GOOGLE_APPLICATION_CREDENTIALS` (for BigQuery)
    * `GEMINI_API_KEY`
3.  Build and run locally:
    ```bash
    ./mvnw clean install
    ./mvnw spring-boot:run
    ```

### 2. Frontend (The Dashboard)
1.  Navigate to the web directory:
    ```bash
    cd MarketPulse-ui
    ```
2.  Install dependencies and start the dev server:
    ```bash
    npm install
    ng serve
    ```
3.  Open `http://localhost:4200` to view the live global war-to-market analysis.

---

## ⚠️ Disclaimer
*This tool is for educational and informational purposes only. Geopolitical situations are highly volatile; always consult with a certified financial advisor before making trading decisions.*