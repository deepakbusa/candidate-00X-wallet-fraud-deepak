const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock data
let fraudFlags = [
  { entryId: '1', reason: 'Duplicate credit entry' },
  { entryId: '2', reason: 'Unusual spike in credits' }
];
let auditLogs = [
  { entryId: '1', changes: 'Flagged as duplicate', timestamp: new Date().toISOString() },
  { entryId: '2', changes: 'Flagged as spike', timestamp: new Date().toISOString() }
];

// GET /api/fraud/flags
app.get('/api/fraud/flags', (req, res) => {
  res.json(fraudFlags);
});

// POST /api/fraud/resolve
app.post('/api/fraud/resolve', (req, res) => {
  const { entryId, action } = req.body;
  fraudFlags = fraudFlags.filter(flag => flag.entryId !== entryId);
  auditLogs.push({
    entryId,
    changes: `Resolved with action: ${action}`,
    timestamp: new Date().toISOString()
  });
  res.json({ success: true });
});

// GET /api/audit/logs
app.get('/api/audit/logs', (req, res) => {
  res.json(auditLogs);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 