# Universal Credit Wallet – Fraud & Compliance Layer

This is a mock backend service for the Universal Credit Wallet's Fraud & Compliance Layer.

## Features
- Monitors abnormal credit flows (spikes, duplicates)
- Exposes REST APIs for flagged entries and audit logs

## Endpoints

### GET /api/fraud/flags
Returns flagged fraud entries.

**Response:**
```
[
  { "entryId": "1", "reason": "Duplicate credit entry" },
  { "entryId": "2", "reason": "Unusual spike in credits" }
]
```

### POST /api/fraud/resolve
Resolves a flagged entry.

**Request Body:**
```
{ "entryId": "1", "action": "mark as reviewed" }
```
**Response:**
```
{ "success": true }
```

### GET /api/audit/logs
Returns audit logs.

**Response:**
```
[
  { "entryId": "1", "changes": "Flagged as duplicate", "timestamp": "..." },
  { "entryId": "2", "changes": "Flagged as spike", "timestamp": "..." }
]
```

## Setup
1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   node index.js
   ```

## Deployment
- Deployed to Railway.
- https://web-production-954a.up.railway.app/.
