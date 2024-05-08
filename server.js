const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

// Apply CORS for all requests (customize based on your needs)
app.use(cors());

// Proxy endpoint
app.get('/proxy', async (req, res) => {
    const apiUrl = 'https://api.ovationtix.com/public/events/client(35679)/production(1159405)';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
