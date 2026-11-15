# PKR Exchange Rate Dashboard

React dashboard fetching PKR-based USD, EUR and GBP exchange rates with a loading state and refresh control.

**Stack:** React, JavaScript, Fetch API, Tailwind CSS

## What it demonstrates

- Fetches PKR-based exchange rate data when the component mounts.
- Displays USD, EUR and GBP rates in a compact table.
- Shows a loading state and offers a page-refresh control.

## Run locally

```bash
git clone https://github.com/AwaisSagar506/React-assignment-5.git
cd React-assignment-5
npm ci
npm start
```

Build with `npm run build`. The UI requests `https://api.exchangerate-api.com/v4/latest/PKR`; data availability depends on the external provider. This is a learning interface, with rates per PKR as returned by the API.

## Project status

Personal learning / portfolio project. Features above were checked against repository source; a complete runtime or production-readiness assessment has not been performed.
