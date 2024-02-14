// file app.ts
import express from 'express';
import { readFileSync } from 'fs';
import { createServer } from 'https';
import { createServer as createHttpServer } from 'http';


// app init
const app = express();


// Environment check
const isProduction = process.env.NODE_ENV === 'production';
const useTLS = isProduction && process.env.USE_TLS === 'true';
const port = parseInt(process.env.PORT, 10) || (useTLS ? 443 : 3000);


// TLS credentials for production with TLS
let credentials = {};
if (useTLS) {
    const privateKey = readFileSync('server.key', 'utf8');
    const certificate = readFileSync('server.pem', 'utf8');
    credentials = { key: privateKey, cert: certificate };
}

// Express routes would remain the same
app.get('/', (req, res) => {
    res.send('Hello World' + (useTLS ? ' with SSL!' : '!'));
});

// healthcheck
app.get('/status', async (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});


// Create server based on the environment
let server;
if (useTLS) {
    server = createServer(credentials, app);
} else {
    server = createHttpServer(app);
}

// Start the server
server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http${useTLS ? 's' : ''}://localhost:${port}`);
});
