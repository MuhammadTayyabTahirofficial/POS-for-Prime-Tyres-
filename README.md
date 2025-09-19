# POS for Prime Tyres

A modern point of sale experience inspired by the BiznisHike ShopON interface. The project is split into a FastAPI backend that exposes demo endpoints and a React + Tailwind CSS frontend that recreates the dashboard, sales, purchases, returns, and product forms showcased in the reference screenshots.

## Project structure

```
.
├── backend/             # FastAPI application with demo endpoints
│   ├── app/main.py
│   └── requirements.txt
├── frontend/            # React + Tailwind interface created with Vite
│   ├── index.html
│   ├── package.json
│   └── src/
└── README.md
```

## Getting started

### Backend (FastAPI)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.

### Frontend (React + Tailwind)

```bash
cd frontend
npm install
npm run dev
```

By default the frontend expects the API at `http://localhost:8000`. You can point it at a different server by creating a `.env` file in `frontend/` with `VITE_API_URL="http://your-api"`.

## Available screens

- Dashboard with quick statistic cards.
- Summary table filtered by date range.
- Sales listing with action buttons.
- Sale order workflow with customer details, item lines, and payment summary.
- Sale return, purchase order, and purchase return flows that mirror the provided UI.
- Purchase history table using the sample data from the API.
- New product creation form styled after the reference design.

The backend currently serves mock data so the UI can be experienced without a database. All forms are fully styled and ready to be connected to persistent storage or additional business logic.
